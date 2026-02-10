import { Resend } from "resend";
import { config } from "dotenv";

config();

type EmailProps = {
  firstName: string;
  email: string;
  message: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({
  firstName,
  email,
  message,
}: EmailProps) => {
  try {
    if (!firstName || !email || !message) {
      throw new Error("All fields are required");
    }

    const info = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL as string,
      replyTo: email,
      subject: `New message from ${firstName}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return info;
  } catch (error) {
    console.error("Email error:", error);
    throw new Error("Email sending failed");
  }
};
