'use server'

import { z } from 'zod';
import { contactFormSchema } from '@/lib/schema';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/contact-form/email-template';

type contactFormInputs = z.infer<typeof contactFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: contactFormInputs) {
  const result = contactFormSchema.safeParse(data);

  if (result.success) {
    const { name, email, phone, message } = result.data;

    try {
      const data = await resend.emails.send({
        from: 'EcomShape <onboarding@resend.dev>',
        to: ['olegek.milkin@gmail.com'],
        subject: 'New client',
        text:message,
        react: EmailTemplate({ name, email, phone, message })
      })
      return { success: true, data }
    } catch(error) {
      return {
        success: false,
        error
      }
    }
  }

  if(result.error) {
    return { success: false, error: result.error?.format() }
  }
}