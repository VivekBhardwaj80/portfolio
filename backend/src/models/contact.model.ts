import { Schema, model } from "mongoose";
import IContact from "../interfaces/contactInterface.js";

const contactSchema = new Schema<IContact>(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, trim: true },
    message: { type: String, required: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
    isRead: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const Contact = model<IContact>("Contact", contactSchema);

export default Contact;
