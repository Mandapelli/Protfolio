import type { ContactInput } from '../validations/contact.validation.js';
import { prisma } from '../config/database.js';

export const contactService = {
  async createMessage(data: ContactInput) {
    return prisma.contactMessage.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone ?? null,
        subject: data.subject,
        message: data.message,
      },
    });
  },
};
