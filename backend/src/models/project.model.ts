import { Schema, model } from "mongoose";
import IProjectModel from "../interfaces/projectInterface.js";

const projectsSchema = new Schema<IProjectModel>({
  title: { type: String, required: true },
  description: { type: String, required: true, },
  techStack:{type:[String],required:true},
  githubLink:{type:String},
  liveDemo:{type:String},
  imageUrl:{type:String},
},{timestamps:true});

const Projects = model<IProjectModel>("Projects",projectsSchema)
export default Projects