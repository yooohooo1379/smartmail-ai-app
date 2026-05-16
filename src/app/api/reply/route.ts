import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const email = body.email;

    const generatedReply = `
Hello,

Thank you for your email. I appreciate your message and will get back to you shortly.

Best regards,
SmartMail AI
`;

    return NextResponse.json({
      success: true,
      reply: generatedReply,
      originalEmail: email,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "Failed to generate reply",
    });
  }
}