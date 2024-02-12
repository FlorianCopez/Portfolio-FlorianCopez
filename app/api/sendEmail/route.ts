import { NextResponse } from "next/server";
import { Transporter, createTransport } from "nodemailer";

interface EmailData {
  subject: string;
  message: string;
  email: string;
}

export async function POST(request: any) {
  try {
    const { subject, message, email }: EmailData = await request.json();

    if (!subject || !message || !email) {
      return NextResponse.json(
        { message: "Subject, message, and email are required fields" },
        { status: 400 }
      );
    }
    
    const transporter: Transporter = createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE==='tls' ? false : true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOption = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: subject,
      html: `<p>${message}</p>`,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json({ message: "Email sent Successfully" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 });
  }
}
