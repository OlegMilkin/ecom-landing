import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "Name is required" }),
  lastName: z
  .string(),
  email: z
    .string()
    .nonempty({ message: "Email is required." })
    .email({ message: "Invalid email address." }),
  phone: z
    .string(),
  message: z
    .string()
    .nonempty({ message: "Message is required." }),
});