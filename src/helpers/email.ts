import { Resend } from 'resend';

interface SendSubmissionEmailOptions {
  strapi: any;
  result: any;
  formName: string;
}

// In-memory cache to deduplicate lifecycle hooks triggered in quick succession (Strapi v5 Draft & Publish)
const processedSubmissions = new Set<string>();

export async function sendSubmissionEmail({ strapi, result, formName }: SendSubmissionEmailOptions) {
  try {
    const docIdentifier = result.documentId || result.id;
    const submissionKey = `${formName}-${docIdentifier}`;

    if (processedSubmissions.has(submissionKey)) {
      strapi.log.info(`[Email Hook] Duplicate event detected for ${submissionKey}. Skipping duplicate email.`);
      return;
    }

    // Add to processed cache
    processedSubmissions.add(submissionKey);
    // Remove from cache after 10 seconds to avoid memory accumulation
    setTimeout(() => {
      processedSubmissions.delete(submissionKey);
    }, 10000);

    strapi.log.info(`[Email Hook] Triggered for ${formName}. Checking environment configuration...`);
    
    const resendApiKey = process.env.RESEND_API_KEY;
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@yourdomain.com';
    const fromEmail = process.env.SMTP_DEFAULT_FROM || 'onboarding@resend.dev';

    strapi.log.info(`[Email Hook] Config details -> Sender: ${fromEmail}, Admin: ${adminEmail}, Has API Key: ${!!resendApiKey}`);

    if (!resendApiKey) {
      strapi.log.warn(`[Email Hook] RESEND_API_KEY is not defined in environment variables. Email notification skipped.`);
      return;
    }

    const resend = new Resend(resendApiKey);

    // Extract formdata or formData (case-insensitive/checks both)
    let rawData = result.formdata || result.formData || result.attributes?.formdata || result.attributes?.formData;

    if (!rawData && result) {
      rawData = result;
    }

    let dataObj: Record<string, any> = {};

    if (typeof rawData === 'string') {
      try {
        dataObj = JSON.parse(rawData);
      } catch (e) {
        dataObj = { rawText: rawData };
      }
    } else if (rawData && typeof rawData === 'object') {
      dataObj = rawData;
    }

    // In case the result has formdata/formData nested
    if (dataObj.formdata && typeof dataObj.formdata === 'object') {
      dataObj = dataObj.formdata;
    } else if (dataObj.formData && typeof dataObj.formData === 'object') {
      dataObj = dataObj.formData;
    }

    // Generate styled field cards
    let fieldsHtml = '';
    const entries = Object.entries(dataObj);
    let hasFields = false;
    
    if (entries.length > 0) {
      for (const [key, value] of entries) {
        // Skip administrative fields if they got included
        if (['id', 'documentId', 'createdAt', 'updatedAt', 'publishedAt'].includes(key)) {
          continue;
        }

        let displayValue = '';
        if (value === null || value === undefined) {
          displayValue = '<em style="color: #9CA3AF;">None</em>';
        } else if (typeof value === 'object') {
          displayValue = `<pre style="margin: 0; font-family: monospace; white-space: pre-wrap; background-color: #F3F4F6; padding: 10px; border-radius: 4px; font-size: 13px; border: 1px solid #E5E7EB; color: #374151;">${JSON.stringify(value, null, 2)}</pre>`;
        } else {
          displayValue = String(value);
        }

        const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
        hasFields = true;

        fieldsHtml += `
          <div style="margin-bottom: 16px; padding: 16px; background-color: #F9FAFB; border-left: 4px solid #4F46E5; border-radius: 0 8px 8px 0; border-top: 1px solid #F3F4F6; border-right: 1px solid #F3F4F6; border-bottom: 1px solid #F3F4F6;">
            <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #6B7280; font-weight: bold; margin-bottom: 6px;">${label}</div>
            <div style="font-size: 14px; color: #111827; font-weight: 500; word-break: break-word; line-height: 1.5;">${displayValue}</div>
          </div>
        `;
      }
    }
    
    if (!hasFields) {
      fieldsHtml = `
        <div style="padding: 24px; text-align: center; color: #6B7280; background-color: #F9FAFB; border-radius: 8px; border: 1px dashed #D1D5DB; font-style: italic;">
          No details were submitted.
        </div>
      `;
    }

    const htmlContent = `
      <div style="max-width: 600px; margin: 20px auto; background-color: #FFFFFF; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; overflow: hidden; border: 1px solid #E5E7EB;">
        <div style="background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); padding: 32px; text-align: center;">
          <span style="font-size: 12px; font-weight: 800; letter-spacing: 0.1em; color: #E0E7FF; text-transform: uppercase; display: block; margin-bottom: 4px;">Notification Alert</span>
          <h1 style="color: #FFFFFF; font-size: 24px; font-weight: 700; margin: 0; letter-spacing: -0.02em;">New ${formName}</h1>
        </div>
        <div style="padding: 32px 24px;">
          <p style="color: #4B5563; font-size: 15px; margin-top: 0; margin-bottom: 24px; line-height: 1.6;">A new submission has been captured by the system. Here is the submitted information:</p>
          
          <div style="margin-top: 8px;">
            ${fieldsHtml}
          </div>
        </div>
        <div style="background-color: #F9FAFB; padding: 24px; text-align: center; border-top: 1px solid #E5E7EB;">
          <p style="margin: 0; font-size: 12px; color: #9CA3AF; line-height: 1.5;">This is an automated notification from the <strong>Artune CMS</strong>.</p>
          <p style="margin: 4px 0 0 0; font-size: 11px; color: #D1D5DB;">© 2026 Artune. All rights reserved.</p>
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `New ${formName} Alert`,
      html: htmlContent,
    });

    if (error) {
      strapi.log.error(`Resend API error sending email for ${formName}:`, error);
    } else {
      strapi.log.info(`Submission email sent successfully via Resend for ${formName}. Message ID: ${data?.id}`);
    }
  } catch (error) {
    strapi.log.error(`Failed to send email via Resend for ${formName}:`, error);
  }
}
