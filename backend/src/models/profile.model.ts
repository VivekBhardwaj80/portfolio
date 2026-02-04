import { Schema, model } from "mongoose";
import IProfile from "../interfaces/profileInterface.js";

const profileSchema = new Schema<IProfile>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    headline: {
      type: String,
      trim: true,
      required: true,
    },
    bio: { type: String, trim: true, required: true },
    location: { type: String, trim: true },
    email: { type: String, trim: true },
    phone: { type: String },
    website: { type: String, trim: true },
    resumeUrl: { type: String, trim: true },
    socialLinks: {
      github: { type: String, trim: true },
      linkedIn: { type: String, trim: true },
      X: { type: String, trim: true },
      instagram: { type: String, trim: true },
      facebook: { type: String, trim: true },
    },
    profileImage: { type: String, trim: true },
  },
  { timestamps: true },
);

const Profile = model<IProfile>("Profile", profileSchema);
export default Profile;
