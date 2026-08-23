import { z } from 'zod';
import validator from 'validator';

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .transform((val) => validator.escape(val.trim())),
  email: z
    .string()
    .email('Invalid email address')
    .max(255)
    .transform((val) => validator.normalizeEmail(val.trim()) || val),
  phone: z
    .string()
    .regex(/^[+]?[\d\s()-]{7,20}$/, 'Invalid phone number')
    .optional()
    .or(z.literal(''))
    .transform((val) => (val ? validator.escape(val.trim()) : undefined)),
  subject: z
    .string()
    .min(3, 'Subject must be at least 3 characters')
    .max(200, 'Subject must be less than 200 characters')
    .transform((val) => validator.escape(val.trim())),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters')
    .transform((val) => validator.escape(val.trim())),
});

export type ContactInput = z.infer<typeof contactSchema>;
