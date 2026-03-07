import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "yuvarajdhammure@gmail.com",
      subject: subject || `New message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #000;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'No subject provided'}</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
          <h3 style="color: #000;">Message:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend API Error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
