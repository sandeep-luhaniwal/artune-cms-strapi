import type { Core } from '@strapi/strapi';
import fs from 'fs';
import path from 'path';
import os from 'os';
import mime from 'mime-types';

function extractFileIds(upload: any): number[] {
  if (!upload) return [];
  if (Array.isArray(upload)) {
    return upload
      .map(item => {
        if (typeof item === 'object' && item !== null) return item.id;
        return Number(item);
      })
      .filter(id => !isNaN(id));
  }
  if (typeof upload === 'object' && upload !== null) {
    if (upload.id) return [Number(upload.id)];
    return [];
  }
  const num = Number(upload);
  if (!isNaN(num)) return [num];
  return [];
}

async function processBase64Uploads(
  rawData: any,
  targetFolderId: number,
  folderPath: string,
  strapi: any
): Promise<{ fileIds: number[]; fileUrls: Record<string, string> }> {
  const fileIds: number[] = [];
  const fileUrls: Record<string, string> = {};

  let dataObj: Record<string, any> = {};
  if (typeof rawData === 'string') {
    try {
      dataObj = JSON.parse(rawData);
    } catch (e) {
      return { fileIds, fileUrls };
    }
  } else if (rawData && typeof rawData === 'object') {
    dataObj = rawData;
  }

  for (const [key, value] of Object.entries(dataObj)) {
    if (typeof value !== 'string') continue;

    // Check if it is a base64 data URL
    const match = value.match(/^data:(.*?);base64,(.*)$/);
    if (!match) continue;

    const mimeType = match[1];
    const base64Data = match[2];
    const buffer = Buffer.from(base64Data, 'base64');

    const extension = mime.extension(mimeType) || 'bin';
    const baseName = key.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const fileName = `${baseName}_${Date.now()}.${extension}`;
    const tempFilePath = path.join(os.tmpdir(), fileName);

    try {
      fs.writeFileSync(tempFilePath, buffer);

      const fileObj = {
        path: tempFilePath,
        name: fileName,
        type: mimeType,
        size: buffer.length,
      };

      const uploadService = strapi.plugin('upload').service('upload');
      const uploaded = await uploadService.upload({
        data: {
          fileInfo: {
            folder: targetFolderId,
            alternativeText: `${key} attachment`,
            caption: `${key} uploaded via API`,
          }
        },
        files: fileObj,
      });

      // uploaded can be an array or a single object
      const uploadedFiles: any[] = [];
      if (Array.isArray(uploaded)) {
        uploaded.forEach(f => {
          if (f && f.id) {
            fileIds.push(f.id);
            uploadedFiles.push(f);
          }
        });
      } else if (uploaded && uploaded.id) {
        fileIds.push(uploaded.id);
        uploadedFiles.push(uploaded);
      }

      for (const uf of uploadedFiles) {
        try {
          await strapi.query('plugin::upload.file').update({
            where: { id: uf.id },
            data: {
              folder: targetFolderId,
              folderPath: folderPath
            }
          });
        } catch (err: any) {
          strapi.log.error(`[Middleware] Error updating folder path for uploaded file ${uf.id}: ${err.message}`);
        }
        if (uf.url) {
          fileUrls[key] = uf.url;
        }
      }

      strapi.log.info(`[Middleware] Converted base64 key "${key}" to File IDs ${uploadedFiles.map(f => f.id).join(', ')} and saved to folder ${targetFolderId}`);
    } catch (err: any) {
      strapi.log.error(`[Middleware] Error processing base64 for key "${key}": ${err.message}`);
    } finally {
      // Clean up the temp file asynchronously to avoid EBUSY race conditions on Windows
      fs.unlink(tempFilePath, () => {});
    }
  }

  return { fileIds, fileUrls };
}

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   */
  register({ strapi }: { strapi: Core.Strapi }) {
    strapi.documents.use(async (context, next) => {
      const { uid, action, params } = context;

      const targetUids = [
        'api::help-contact-submission.help-contact-submission',
        'api::gdpr-sumbmission.gdpr-sumbmission',
        'api::crate-your-design-submission.crate-your-design-submission',
        'api::artist-submission.artist-submission',
        'api::art-scale-quote-submission.art-scale-quote-submission',
        'api::art-scale-consultation-submission.art-scale-consultation-submission',
      ];

      if (targetUids.includes(uid) && (action === 'create' || action === 'update') && params?.data) {
        const data = params.data as any;
        const targetFolderId = data.folderId !== undefined ? Number(data.folderId) : (data.folder !== undefined ? Number(data.folder) : 14);

        // Retrieve formdata/formData (checking both lowercase and capital cases)
        const rawData = data.formdata !== undefined ? data.formdata : data.formData;
        
        if (rawData !== undefined) {
          let dataObj: Record<string, any> = {};

          if (typeof rawData === 'string') {
            try {
              dataObj = JSON.parse(rawData);
            } catch (e: any) {
              strapi.log.error(`[Middleware] Error parsing json formdata: ${e.message}`);
            }
          } else if (rawData && typeof rawData === 'object') {
            dataObj = rawData;
          }

          // Get target folder path
          let folderPath = '/';
          try {
            const folder = await strapi.query('plugin::upload.folder').findOne({
              where: { id: targetFolderId }
            });
            if (folder) {
              folderPath = folder.path;
            }
          } catch (err: any) {
            strapi.log.error(`[Middleware] Error querying folder ${targetFolderId}: ${err.message}`);
          }

          // 1. Process base64 files
          const { fileIds, fileUrls } = await processBase64Uploads(dataObj, targetFolderId, folderPath, strapi);
          if (fileIds.length > 0) {
            const existingUploadIds = extractFileIds(data.upload);
            data.upload = [...existingUploadIds, ...fileIds];
          }

          // 2. Populate allpostapidata components
          const allPostApiData: any[] = [];
          let nameVal = '';
          let emailVal = '';

          if (dataObj && typeof dataObj === 'object') {
            for (const [key, value] of Object.entries(dataObj)) {
              if (['id', 'documentId', 'createdAt', 'updatedAt', 'publishedAt'].includes(key)) {
                continue;
              }

              // If it was a base64 string, we store the uploaded file URL in the component value field
              const valStr = fileUrls[key] !== undefined 
                ? fileUrls[key]
                : (value === null || value === undefined 
                  ? '' 
                  : (typeof value === 'object' ? JSON.stringify(value) : String(value)));

              allPostApiData.push({
                __component: 'input.allpostapidata',
                input: key,
                value: valStr,
              });

              const keyLower = key.toLowerCase().trim();
              if (['name', 'full name', 'fullname', 'first name', 'firstname', 'contact name'].includes(keyLower)) {
                nameVal = valStr;
              }
              if (['email', 'e-mail', 'email address', 'emailaddress'].includes(keyLower)) {
                emailVal = valStr;
              }
            }
          }
          data.allpostapidata = allPostApiData;
          if (nameVal) {
            data.name = nameVal;
          }
          if (emailVal) {
            data.email = emailVal;
          }
          strapi.log.info(`[Middleware] Populated allpostapidata, name: ${nameVal}, email: ${emailVal}`);
        }

        // Handle standard uploaded files in data.upload (if any, move them to the target folder)
        if (data.upload) {
          const fileIds = extractFileIds(data.upload);
          
          // Get target folder path
          let folderPath = '/';
          try {
            const folder = await strapi.query('plugin::upload.folder').findOne({
              where: { id: targetFolderId }
            });
            if (folder) {
              folderPath = folder.path;
            }
          } catch (err: any) {
            strapi.log.error(`[Middleware] Error querying folder ${targetFolderId}: ${err.message}`);
          }

          for (const fileId of fileIds) {
            try {
              await strapi.query('plugin::upload.file').update({
                where: { id: fileId },
                data: { 
                  folder: targetFolderId,
                  folderPath: folderPath
                }
              });
              strapi.log.info(`[Middleware] Moved uploaded file ${fileId} to Media Library folder ${targetFolderId} with path ${folderPath}`);
            } catch (err: any) {
              strapi.log.error(`[Middleware] Error moving file ${fileId} to folder ${targetFolderId}: ${err.message}`);
            }
          }
        }
      }

      return await next();
    });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   */
  bootstrap() {},
};
