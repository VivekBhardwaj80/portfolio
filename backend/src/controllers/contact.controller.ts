import { Request, Response } from "express";
import { IResponse } from "../interfaces/responseInterface.js";
import validate from "email-validator";
import Contact from "../models/contact.model.js";
import { sendEmail } from "../config/nodeMailer.js";

const createContact = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log("Received contact request with body:", req.body);
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
    console.log("Creating contact in database...");
    const newContact =await Contact.create({
      email,
      firstName,
      lastName,
      message,
      phone,
    });
    console.log("Contact created:", newContact._id);
    try {
      console.log("Sending email...");
      await sendEmail({ firstName, email, message });
      console.log("Email sent successfully");
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      // Don't fail the request if email fails
    }
    // await sendEmail({ firstName, email, message });
    res.status(201).json({
      success: true,
      message: "Message sent Successfully",
    } as IResponse);
  } catch (error: any) {
    console.error("Error in createContact:", error);
    console.error("Error stack:", error.stack);
    console.log("error", error.message);
    res.status(500).json({
      success: false,
      message: "create Email Error",
      error: error.message,
    } as IResponse);
  }
};

export default createContact;
