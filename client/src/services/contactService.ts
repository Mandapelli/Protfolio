import { api } from '@/services/api';
import type { ApiResponse, ContactFormData } from '@/types';

export const contactService = {
  submit: (data: ContactFormData) =>
    api.post<ApiResponse>('/contact', data),
};
