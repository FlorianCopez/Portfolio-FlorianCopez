import { NextResponse } from "next/server";
import { Transporter, createTransport } from "nodemailer";

/**
 * Interface representing the structure of email data.
 */
interface EmailData {
  subject: string;
  message: string;
  email: string;
  name: string;
}

/**
 * Handles POST requests for sending emails.
 * @param {any} request - The incoming request object.
 * @returns {Promise<NextResponse>} Promise resolving to a NextResponse.
 */
export async function POST(request: any) {
  try {
    // Extract email data from the request body
    const { subject, message, name, email }: EmailData = await request.json();
    
    // Check if required fields are present
    if (!subject || !message || !name || !email) {
      throw new Error("Les champs sont obligatoires");
    }

    // Create a nodemailer transporter for sending emails
    const transporter: Transporter = createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === 'tls' ? false : true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Compose email options
    const mailOption = {
      from: `"Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: subject,
      html: `<h2>Nouveau mail reçu de "${name}"</h2><p>${message}</p><span>${email}</span>`,
    };

    // Send the email using nodemailer
    await transporter.sendMail(mailOption);

    // Return a successful response
    return NextResponse.json({ message: "L'email a bien été envoyé!" }, { status: 200 });
  } catch (error: any) {
    // Return an error response if there is an issue sending the email
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 });
  }
}
