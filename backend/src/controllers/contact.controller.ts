import { Request, Response } from "express";
import { IResponse } from "../interfaces/responseInterface.js";
import validate from "email-validator";
import Contact from "../models/contact.model.js";
import { sendEmail } from "../config/nodeMailer.js";

// const createContact = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { email, firstName, lastName, message, phone } = req.body;
//     if (email && !validate.validate(email)) {
//       res
//         .status(400)
//         .json({ success: false, message: "Invalid email format" } as IResponse);
//       return;
//     }
//     if (!email || !firstName || !message) {
//       res.status(400).json({
//         success: false,
//         message: "all field are required",
//       } as IResponse);
//       return;
//     }
//     await Contact.create({
//       email,
//       firstName,
//       lastName,
//       message,
//       phone,
//     });
//     await sendEmail({ firstName, email, message });
//     res.status(201).json({
//       success: true,
//       message: "Message sent Successfully",
//     } as IResponse);
//   } catch (error: any) {
//     console.log("error", error.message);
//     res.status(500).json({
//       success: false,
//       message: "create Email Error",
//       error: error.message,
//     } as IResponse);
//   }
// };
const createContact = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log("Incoming body:", req.body);

    const { email, firstName, lastName, message, phone } = req.body;

    if (!email || !firstName || !message) {
      res.status(400).json({ success: false, message: "All fields required" });
      return;
    }

    const saved = await Contact.create({
      email,
      firstName,
      lastName,
      message,
      phone,
    });

    console.log("Saved to DB:", saved);

    try {
      const emailRes = await sendEmail({ firstName, email, message });
      console.log("Email result:", emailRes);
    } catch (emailError) {
      console.log("Email sending failed:", emailError);
    }

    res.status(201).json({
      success: true,
      message: "Message saved (check logs for email)",
    });

  } catch (error: any) {
    console.log("FULL BACKEND ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export default createContact;
