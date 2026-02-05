// import { Request, Response } from "express";
// import { IResponse } from "../interfaces/responseInterface.js";
// import validate from "email-validator";
// import Contact from "../models/contact.model.js";
// import { sendEmail } from "../config/nodeMailer.js";

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

// export default createContact;

import { Request, Response } from "express";
import { IResponse } from "../interfaces/responseInterface.js";
import validate from "email-validator";
import Contact from "../models/contact.model.js";
import { sendEmail } from "../config/nodeMailer.js";

const createContact = async (req: Request, res: Response): Promise<void> => {
  console.log("=== CONTACT CONTROLLER START ===");
  console.log("Request received at:", new Date().toISOString());
  console.log("Request body:", JSON.stringify(req.body, null, 2));
  console.log("Request headers:", {
    'content-type': req.headers['content-type'],
    origin: req.headers.origin
  });

  try {
    const { email, firstName, lastName, message, phone } = req.body;
    
    console.log("Parsed fields:", {
      email,
      firstName,
      lastName,
      message,
      phone
    });

    // Validate required fields
    if (!email || !firstName || !message) {
      console.log("Validation failed: Missing required fields");
      res.status(400).json({
        success: false,
        message: "Email, first name, and message are required",
      } as IResponse);
      return;
    }

    // Validate email format
    if (email && !validate.validate(email)) {
      console.log("Validation failed: Invalid email format -", email);
      res.status(400).json({ 
        success: false, 
        message: "Invalid email format" 
      } as IResponse);
      return;
    }

    console.log("Creating contact in database...");
    
    // Create contact in database
    const newContact = await Contact.create({
      email: email.trim(),
      firstName: firstName.trim(),
      lastName: lastName ? lastName.trim() : undefined,
      message: message.trim(),
      phone: phone ? phone.trim() : undefined,
    });

    console.log("✅ Contact created in DB with ID:", newContact._id);

    // Send email notification
    try {
      console.log("Sending email notification...");
      await sendEmail({ 
        firstName: firstName.trim(), 
        email: email.trim(), 
        message: message.trim() 
      });
      console.log("✅ Email sent successfully");
    } catch (emailError) {
      console.error("⚠️ Failed to send email:", emailError);
      // Don't fail the request if email fails
    }

    console.log("=== CONTACT CONTROLLER SUCCESS ===");
    
    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      contact: newContact
    } as IResponse);

  } catch (error: any) {
    console.error("=== CONTACT CONTROLLER ERROR ===");
    console.error("Error type:", error.name);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    
    // Check for specific error types
    if (error.name === 'ValidationError') {
      res.status(400).json({
        success: false,
        message: "Validation error: " + error.message,
      } as IResponse);
    } else if (error.name === 'MongoError' || error.name === 'MongoServerError') {
      res.status(500).json({
        success: false,
        message: "Database error. Please try again.",
      } as IResponse);
    } else {
      res.status(500).json({
        success: false,
        message: "Failed to send message. Please try again.",
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      } as IResponse);
    }
  }
};

export default createContact;