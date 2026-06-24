/**
 * artist-submission controller
 */

import { factories } from '@strapi/strapi';
import ExcelJS from 'exceljs';

export default factories.createCoreController('api::artist-submission.artist-submission', ({ strapi }) => ({
  async exportSubmissions(ctx) {
    try {
      // Retrieve all artist submissions
      const submissions = await strapi.documents('api::artist-submission.artist-submission').findMany({
        limit: 10000,
      });

      // Gather all unique keys from the dynamic formData JSON field
      const headerSet = new Set<string>();
      submissions.forEach((sub: any) => {
        let formData = sub.formData;
        if (typeof formData === 'string') {
          try {
            formData = JSON.parse(formData);
          } catch (e) {
            // ignore parsing error
          }
        }
        if (formData && typeof formData === 'object') {
          Object.keys(formData).forEach((key) => {
            headerSet.add(key);
          });
        }
      });

      const headers = Array.from(headerSet);

      // Create Excel workbook and worksheet
      const workbook = new ExcelJS.Workbook();
      const sheet = workbook.addWorksheet('Submissions');

      if (headers.length === 0) {
        sheet.columns = [
          { header: 'No Submissions Found', key: 'empty', width: 30 }
        ];
        sheet.addRow({ empty: 'No dynamic form data found in any submissions.' });
      } else {
        // Define columns based on dynamically collected headers
        sheet.columns = headers.map((header) => ({
          header: header.charAt(0).toUpperCase() + header.slice(1),
          key: header,
          width: 25,
        }));

        // Populate rows with dynamic key-value pairs
        submissions.forEach((sub: any) => {
          let formData = sub.formData;
          if (typeof formData === 'string') {
            try {
              formData = JSON.parse(formData);
            } catch (e) {
              // ignore parsing error
            }
          }
          const rowData: Record<string, any> = {};
          headers.forEach((header) => {
            rowData[header] = formData?.[header] ?? '';
          });
          sheet.addRow(rowData);
        });
      }

      // Generate the Excel workbook buffer
      const buffer = await workbook.xlsx.writeBuffer();

      // Configure headers for file download
      ctx.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      ctx.set('Content-Disposition', 'attachment; filename=artist_submissions.xlsx');
      ctx.body = buffer;
    } catch (error: any) {
      strapi.log.error('Error exporting artist submissions:', error);
      ctx.internalServerError('An error occurred during submission export.');
    }
  },
}));
