import { sendSubmissionEmail } from '../../../../helpers/email';

export default {
  async afterCreate(event: any) {
    const { result } = event;
    await sendSubmissionEmail({
      strapi,
      result,
      formName: 'Help/Contact Submission',
    });
  },
};
