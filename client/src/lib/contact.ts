import { apiRequest } from "./queryClient";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactForm(data: ContactFormData): Promise<void> {
  await apiRequest("POST", "/api/contact", data);
}
