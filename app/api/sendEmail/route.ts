import { NextResponse } from "next/server";
import { Transporter, createTransport } from "nodemailer";

interface EmailData {
  subject: string;
  message: string;
  name: string;
}

export async function POST(request: any) {
  try {
    const { subject, message, name }: EmailData = await request.json();
    
    if (!subject || !message || !name) {
      throw new Error("Les champs sont obligatoires");
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
      from: `"Portfolio" <${process.env.EMAIL_USER}`,
      to: process.env.EMAIL_USER,
      subject: subject,
      html: `<h2>Nouveau mail de "${name}" reçu</h2> <h3>Ci-joint le message : </h3> <p>${message}</p>`,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json({ message: "L'email a bien été envoyé!" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 });
  }
}
