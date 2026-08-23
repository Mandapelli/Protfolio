import type { Request, Response, NextFunction } from 'express';
import { contactSchema } from '../validations/contact.validation.js';
import { contactService } from '../services/contact.service.js';
import { AppError } from '../utils/AppError.js';

export async function submitContact(req: Request, res: Response, next: NextFunction) {
  try {
    const parsed = contactSchema.safeParse(req.body);

    if (!parsed.success) {
      const errors = parsed.error.errors.map((e) => e.message).join(', ');
      throw new AppError(errors, 400);
    }

    await contactService.createMessage(parsed.data);

    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
    });
  } catch (error) {
    next(error);
  }
}
