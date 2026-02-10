import nodemailer from "nodemailer";
import { config } from "dotenv";

config();

type EmailProps = {
  firstName: string;
  email: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async ({ firstName, email, message }: EmailProps) => {
  try {
    if (!firstName || !email || !message) {
      throw new Error("All fields are required");
    }

    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.ADMIN_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `New message from ${firstName}`,
      text: `
Name: ${firstName}
Email: ${email}

Message:
${message}
      `,
    });

    return info;
  } catch (error) {
    console.error("Email error:", error);
    throw new Error("Email sending failed");
  }
};
