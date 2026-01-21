import { Schema, model } from "mongoose";
import { IFeedback } from "../interfaces/feedbackInterface.js";

const feedbackSchema = new Schema<IFeedback>(
  {
    name: { type: String, trim: true },
    email: { type: String, trim: true },
    feedbackType: {
      type: String,
      enum: [
        "General Feedback",
        "Suggestion",
        "Bug / Issue",
        "Recruitment",
        "Other",
      ],
      required: true,
    },
    message: { type: String, required: true },
    company: { type: String, trim: true },
    role: { type: String, trim: true },
    isRead: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const Feedback = model<IFeedback>("Feedback", feedbackSchema);
export default Feedback;
