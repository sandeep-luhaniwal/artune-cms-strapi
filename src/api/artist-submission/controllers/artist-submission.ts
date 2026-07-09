/**
 * artist-submission controller
 */

import { factories } from '@strapi/strapi';
import ExcelJS from 'exceljs';

export default factories.createCoreController('api::artist-submission.artist-submission', ({ strapi }) => ({
  async exportSubmissions(ctx) {
    try {
      const submissions = await strapi.documents('api::artist-submission.artist-submission').findMany({
        limit: 10000,
      });

      const headerSet = new Set<string>();
      submissions.forEach((sub: any) => {
        let formdata = sub.formData;
        if (typeof formdata === 'string') {
          try {
            formdata = JSON.parse(formdata);
          } catch (e) {
            // ignore parsing error
          }
        }
        if (formdata && typeof formdata === 'object') {
          Object.keys(formdata).forEach((key) => {
            headerSet.add(key);
          });
        }
      });

      const headers = Array.from(headerSet);

      const workbook = new ExcelJS.Workbook();
      const sheet = workbook.addWorksheet('Submissions');

      if (headers.length === 0) {
        sheet.columns = [
          { header: 'No Submissions Found', key: 'empty', width: 30 }
        ];
        sheet.addRow({ empty: 'No dynamic form data found in any submissions.' });
      } else {
        sheet.columns = headers.map((header) => ({
          header: header.charAt(0).toUpperCase() + header.slice(1),
          key: header,
          width: 25,
        }));

        submissions.forEach((sub: any) => {
          let formdata = sub.formData;
          if (typeof formdata === 'string') {
            try {
              formdata = JSON.parse(formdata);
            } catch (e) {
              // ignore parsing error
            }
          }
          const rowData: Record<string, any> = {};
          headers.forEach((header) => {
            rowData[header] = formdata?.[header] ?? '';
          });
          sheet.addRow(rowData);
        });
      }

      const buffer = await workbook.xlsx.writeBuffer();

      ctx.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      ctx.set('Content-Disposition', 'attachment; filename=artist_submissions.xlsx');
      ctx.body = buffer;
    } catch (error: any) {
      strapi.log.error('Error exporting artist submissions:', error);
      ctx.internalServerError('An error occurred during submission export.');
    }
  },

  async create(ctx) {
    try {
      const requestFiles = (ctx.request as any).files;
      const bodyData = (ctx.request as any).body || {};

      let formdataField: any = {};
      const uploadedFilesList: any[] = [];

      // 1. Handle file uploads if files exist
      if (requestFiles && Object.keys(requestFiles).length > 0) {
        const rawFiles = requestFiles.files || Object.values(requestFiles)[0];
        const fileList = Array.isArray(rawFiles) ? rawFiles : [rawFiles];
        const uploadService = strapi.plugin('upload').service('upload');

        for (const file of fileList) {
          const uploaded = await uploadService.upload({
            data: {},
            files: file,
          });

          if (Array.isArray(uploaded)) {
            uploadedFilesList.push(...uploaded);
          } else {
            uploadedFilesList.push(uploaded);
          }
        }
      }

      // 2. Parse formdata/formData field
      const rawData = bodyData.formdata || bodyData.formData || (bodyData.data && (bodyData.data.formdata || bodyData.data.formData));
      if (rawData) {
        formdataField = typeof rawData === 'string' ? JSON.parse(rawData) : rawData;
      } else {
        formdataField = bodyData.data || bodyData;
      }

      // 3. Build allpostapidata component array
      const allpostapidata = Object.entries(formdataField).map(([key, val]) => ({
        __component: 'input.allpostapidata' as const,
        input: String(key ?? ''),
        value: String(val ?? ''),
      }));

      // 4. Build entry data payload
      const apiUid = 'api::artist-submission.artist-submission';
      const entryData = {
        allpostapidata: allpostapidata,
      } as any;

      const contentTypeAttrs = strapi.contentType(apiUid).attributes as any;

      if (contentTypeAttrs.formData) {
        entryData.formData = formdataField;
      } else {
        entryData.formdata = formdataField;
      }

      if (contentTypeAttrs.upload) {
        entryData.upload = uploadedFilesList.length > 0 ? uploadedFilesList.map((file) => file.id) : null;
      }

      // 5. Create entry and return populated response
      const newEntry = await strapi.documents(apiUid).create({
        data: entryData,
        status: 'published',
      });

      const populatedEntry = await strapi.documents(apiUid).findOne({
        documentId: newEntry.documentId,
        populate: '*',
      });

      return ctx.send({
        data: populatedEntry,
      });
    } catch (err: any) {
      strapi.log.error('Error in custom create controller:', err);
      return ctx.internalServerError(err.message);
    }
  }
}));
