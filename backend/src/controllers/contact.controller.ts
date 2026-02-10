import { Request, Response } from "express";
import { IResponse } from "../interfaces/responseInterface.js";
import validate from "email-validator";
import Contact from "../models/contact.model.js";
import { sendEmail } from "../config/nodeMailer.js";

const createContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, firstName, lastName, message, phone } = req.body;

    if (!email || !firstName || !message) {
      res.status(400).json({ success: false, message: "All fields required" } as IResponse);
      return;
    }

    const saved = await Contact.create({
      email,
      firstName,
      lastName,
      message,
      phone,
    });


    try {
      const emailRes = await sendEmail({ firstName, email, message });
    } catch (emailError) {
      console.log("Email sending failed:", emailError);
    }

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
    }as IResponse);

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    } as IResponse);
  }
};


export default createContact;
