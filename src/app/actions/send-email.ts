'use server';

import * as z from 'zod';
import { Resend } from 'resend';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL as string;
// The from email must be a specific value for Resend's test environment.
const fromEmail = 'onboarding@resend.dev';

const formSchema = z.object({
  name: z.string(),
  lookingFor: z.string(),
  email: z.string().email(),
});

export async function sendEmail(formData: z.infer<typeof formSchema>) {
  try {
    const { name, email, lookingFor } = formSchema.parse(formData);
    
    // Dynamically import the email component
    const { default: ContactFormEmail } = await import('@/components/emails/contact-form-email');

    const { data, error } = await resend.emails.send({
      from: `Contact Form <${fromEmail}>`,
      to: [toEmail],
      subject: `New Message from ${name} via your Portfolio`,
      // The user's email is in the body, so reply_to is not strictly needed for this form
      // and can cause issues on the free tier.
      react: React.createElement(ContactFormEmail, {
        name,
        email,
        lookingFor,
      }),
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
