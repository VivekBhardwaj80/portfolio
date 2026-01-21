import { Schema, model } from "mongoose";
import { IEducation } from "../interfaces/educationInterface.js";

const educationSchema = new Schema<IEducation>(
  {
    level: {
      type: String,
      enum: ["10th", "12th", "Diploma", "Graduation", "Post Graduation"],
      required: true,
    },
    institution: {
      type: String,
      enum: ["School", "College", "University"],
      required: true,
    },
    fieldOfStudy: { type: String },
    degree: { type: String },
    startYear: { type: Date, required: true },
    endYear: { type: Date },
    isCurrent: { type: String, default: false },
    grade: { type: String },
    description: { type: String },
    location: { type: String },
  },
  { timestamps: true },
);

const Education = model<IEducation>("Education", educationSchema);
export default Education;
