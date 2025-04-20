import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "Name is required" }),
  lastName: z
  .string()
  .nonempty({ message: "Last name is required" }),
  email: z
    .string()
    .nonempty({ message: "Email is required." })
    .email({ message: "Invalid email address." }),
  phone: z
    .string()
    .nonempty({ message: "Phone is required." }),
  message: z
    .string()
    .nonempty({ message: "Message is required." }),
});