import { Schema, model } from "mongoose";
import IExperience from "../interfaces/experienceInterface.js";

const experienceSchema = new Schema<IExperience>(
  {
    company: { type: String, required: true },
    role: { type: String, required: true },
    startDate: { type: Date,required:true },
    description: { type: String },
    endDate: { type: Date },
    location: { type: String },
    isCurrent: { type: String, default: false },
    logo:{type:String},
    technologies:{type:[String]},
    working:{type:String}
  },
  { timestamps: true },
);

const Experience = model<IExperience>("Experience", experienceSchema);
export default Experience;
