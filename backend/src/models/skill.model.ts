import { Schema, model } from "mongoose";
import { ISkillModel } from "../interfaces/skillInterface.js";

const skillSchema = new Schema<ISkillModel>(
  {
    name: { type: String, required: true, trim: true, unique: true },
    level: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "frontend",
        "backend",
        "language",
        "tool",
        "platform",
        "authentication",
        "api",
        "realtime",
        "devops",
        "database",
        "animation",
      ],
    },
    icon: { type: String },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const Skill = model<ISkillModel>("Skill", skillSchema);
export default Skill;
