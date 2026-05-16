export type EmailAction = "summarize" | "reply";

export interface EmailRequest {
  email: string;
}

export interface EmailResponse {
  success: boolean;
  summary?: string;
  reply?: string;
  originalEmail?: string;
  error?: string;
}