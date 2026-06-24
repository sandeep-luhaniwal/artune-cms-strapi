/**
 * art-scale-consultation-submission controller
 */

import { factories } from '@strapi/strapi';
import ExcelJS from 'exceljs';

export default factories.createCoreController('api::art-scale-consultation-submission.art-scale-consultation-submission', ({ strapi }) => ({
  async exportSubmissions(ctx) {
    try {
      const submissions = await strapi.documents('api::art-scale-consultation-submission.art-scale-consultation-submission').findMany({
        limit: 10000,
      });

      const headerSet = new Set<string>();
      submissions.forEach((sub: any) => {
        let formdata = sub.formdata;
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
          let formdata = sub.formdata;
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
      ctx.set('Content-Disposition', 'attachment; filename=art_scale_consultation_submissions.xlsx');
      ctx.body = buffer;
    } catch (error: any) {
      strapi.log.error('Error exporting art scale consultation submissions:', error);
      ctx.internalServerError('An error occurred during submission export.');
    }
  },
}));
