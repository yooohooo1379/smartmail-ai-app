import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const email = body.email;

    const summary = `
This email has been summarized by SmartMail AI.

Key points:
- The sender shared an important message.
- The user should review the details.
- A professional response may be needed.
`;

    return NextResponse.json({
      success: true,
      summary,
      originalEmail: email,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "Failed to summarize email",
    });
  }
}