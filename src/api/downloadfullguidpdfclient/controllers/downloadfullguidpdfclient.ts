/**
 * downloadfullguidpdfclient controller
 */

import { factories } from '@strapi/strapi';
import ExcelJS from 'exceljs';

export default factories.createCoreController('api::downloadfullguidpdfclient.downloadfullguidpdfclient', ({ strapi }) => ({
  async exportSubmissions(ctx) {
    try {
      const submissions = await strapi.documents('api::downloadfullguidpdfclient.downloadfullguidpdfclient').findMany({
        limit: 10000,
      });

      // Gather all unique keys from parsed userform, plus the standard fields
      const headerSet = new Set<string>();
      headerSet.add('email');
      headerSet.add('userform'); // default column if it's not JSON

      submissions.forEach((sub: any) => {
        let userform = sub.userform;
        if (typeof userform === 'string') {
          try {
            userform = JSON.parse(userform);
          } catch (e) {
            // ignore parsing error
          }
        }
        if (userform && typeof userform === 'object') {
          Object.keys(userform).forEach((key) => {
            headerSet.add(key);
          });
        }
      });

      const headers = Array.from(headerSet);

      const workbook = new ExcelJS.Workbook();
      const sheet = workbook.addWorksheet('Clients');

      sheet.columns = headers.map((header) => ({
        header: header.charAt(0).toUpperCase() + header.slice(1),
        key: header,
        width: 25,
      }));

      submissions.forEach((sub: any) => {
        const rowData: Record<string, any> = {
          email: sub.email ?? '',
          userform: sub.userform ?? '',
        };

        let userform = sub.userform;
        if (typeof userform === 'string') {
          try {
            userform = JSON.parse(userform);
          } catch (e) {
            // ignore parsing error
          }
        }
        if (userform && typeof userform === 'object') {
          Object.keys(userform).forEach((key) => {
            rowData[key] = userform[key] ?? '';
          });
        }

        sheet.addRow(rowData);
      });

      const buffer = await workbook.xlsx.writeBuffer();

      ctx.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      ctx.set('Content-Disposition', 'attachment; filename=download_pdf_clients.xlsx');
      ctx.body = buffer;
    } catch (error: any) {
      strapi.log.error('Error exporting download pdf clients:', error);
      ctx.internalServerError('An error occurred during client export.');
    }
  },
}));
