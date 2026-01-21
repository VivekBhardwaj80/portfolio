import { Schema, model } from "mongoose";
import { ISeo } from "../interfaces/seoInterface.js";

const seoSchema = new Schema<ISeo>(
  {
    title: { type: String, trim: true, required: true },
    page: {
      type: String,
      enum: [
        "default",
        "home",
        "about",
        "projects",
        "project-details",
        "skills",
        "education",
        "experience",
        "feedback",
      ],
      required: true,
      unique:true
    },
    description: {
      type: String,
      required: true,
    },
    keyword: { type: [String] },
    ogTitle: { type: String },
    ogImage: { type: String },
    ogDescription: { type: String },
  },
  { timestamps: true },
);

const Seo = model<ISeo>("Seo", seoSchema);
export default Seo;
