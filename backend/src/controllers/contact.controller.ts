import { Request, Response } from "express";
import { IResponse } from "../interfaces/responseInterface.js";
import validate from "email-validator";
import Contact from "../models/contact.model.js";
import { sendEmail } from "../config/nodeMailer.js";

const createContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, firstName, lastName, message, phone } = req.body;
    if (email && !validate.validate(email)) {
      res
        .status(400)
        .json({ success: false, message: "Invalid email format" } as IResponse);
      return;
    }
    if (!email || !firstName || !message) {
      res.status(400).json({
        success: false,
        message: "all field are required",
      } as IResponse);
      return;
    }
    await Contact.create({
      email,
      firstName,
      lastName,
      message,
      phone,
    });
    await sendEmail({ firstName, email, message });
    res.status(201).json({
      success: true,
      message: "Message sent Successfully",
    } as IResponse);
  } catch (error: any) {
    console.log("error", error.message);
    res.status(500).json({
      success: false,
      message: "create Email Error",
      error: error.message,
    } as IResponse);
  }
};

export default createContact;
