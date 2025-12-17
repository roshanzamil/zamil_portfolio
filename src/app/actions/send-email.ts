'use server';

import * as z from 'zod';
import { Resend } from 'resend';
import ContactFormEmail from '@/components/emails/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL as string;
const fromEmail = process.env.FROM_EMAIL as string;

const formSchema = z.object({
  name: z.string(),
  lookingFor: z.string(),
  email: z.string().email(),
});

export async function sendEmail(formData: z.infer<typeof formSchema>) {
  try {
    const { name, email, lookingFor } = formSchema.parse(formData);

    const { data, error } = await resend.emails.send({
      from: `Contact Form <${fromEmail}>`,
      to: [toEmail],
      subject: `New Message from ${name} via your Portfolio`,
      reply_to: email,
      react: ContactFormEmail({
        name,
        email,
        lookingFor,
      }) as React.ReactElement,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Validation error:', error.flatten().fieldErrors);
      return { success: false, error: 'Invalid form data.' };
    }
    console.error('Error sending email:', error);
    return { success: false, error: 'An unexpected error occurred.' };
  }
}
