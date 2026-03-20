import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const TO = process.env.CONTACT_FORM_TO ?? "info@allstarkidsacademyga.com";

  const body = await req.json().catch(() => ({}));
  const { name, email, message } = body as Record<string, string>;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "All Star Kids Academy <noreply@allstarkidsacademyga.com>",
    to: TO,
    replyTo: email,
    subject: `Website message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
