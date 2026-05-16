export function buildReplyPrompt(email: string) {
  return `
You are SmartMail AI, a professional email assistant.

Write a clear, polite, and professional reply to the following email:

${email}
`;
}

export function buildSummaryPrompt(email: string) {
  return `
You are SmartMail AI, a professional email assistant.

Summarize the following email in a short and useful way:

${email}
`;
}