import { Schema, model } from "mongoose";
import IUserModel from "../interfaces/userInterface.js";

const userSchema = new Schema<IUserModel>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password:{type:String,required:true},
  phone:{type:Number}
},{timestamps:true});

const User = model<IUserModel>("User",userSchema)
export default User