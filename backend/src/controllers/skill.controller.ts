import { Response, Request } from "express";
import { IResponse } from "../interfaces/responseInterface.js";
import Skill from "../models/skill.model.js";
import cloudinary from "../config/cloudinary.js";

const addSkill = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, level, category, isFeatured } = req.body;
    if (!name || !level || !category) {
      res.status(400).json({
        success: false,
        message: "Name, Level, and Category is required",
      } as IResponse);
      return;
    }
    const featured = isFeatured === "true" || isFeatured === true
    let skillIcon:string = ""
    if(req.file){
     const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}` 
     const result = await cloudinary.uploader.upload(base64Image,{
      folder:'skill'
     })
     skillIcon = result.secure_url
    }
    const existingSkill = await Skill.findOne({ name });
    if (existingSkill) {
      res.status(400).json({
        success: false,
        message: "Skill already exist",
      } as IResponse);
      return;
    }
    const skill = await Skill.create({
      name,
      level,
      category,
      icon:skillIcon?skillIcon : '',
      isFeatured:featured
    });
    res
      .status(201)
      .json({
        success: true,
        message: "Skills added successfully",
        data: skill,
      } as IResponse);
  } catch (error: any) {
    console.log(error.message)
    res
      .status(500)
      .json({
        success: false,
        message: "internal add Skill error",
        error: error.message,
      } as IResponse);
  }
};

const getAllSkill = async (req: Request, res: Response): Promise<void> => {
  try {
    const existingSkill = await Skill.find();
    if (!existingSkill) {
      res.status(400).json({
        success: false,
        message: "Don't have any Skills",
      } as IResponse);
      return;
    }
    res.status(200).json({
      success: true,
      message: "All Skills",
      data: existingSkill,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "getAllSkills internal error",
      error: error.message,
    } as IResponse);
  }
};

const getASingleSkill = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;
    if (!id) {
      res
        .status(400)
        .json({ success: false, message: "Id is required" } as IResponse);
    }
    const findSingleSkill = await Skill.findById(id);
    if (!findSingleSkill) {
      res
        .status(400)
        .json({ success: false, message: "Skill not found" } as IResponse);
    }
    res
      .status(200)
      .json({ success: true, data: findSingleSkill } as IResponse);
  } catch (error: any) {
    res
      .status(200)
      .json({
        success: true,
        message: "getASingleSkill internal Error",
        error: error.message,
      } as IResponse);
  }
};

const deleteSingleSkill = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;
    if (!id) {
      res
        .status(400)
        .json({ success: false, message: "Id is required" } as IResponse);
    }
    const deleteSkill = await Skill.findByIdAndDelete(id);
    if (!deleteSkill) {
      res
        .status(400)
        .json({ success: false, message: "Skill not found" } as IResponse);
    }
    res.status(200).json({success:true,message:`delete ${deleteSkill?.name} successfully`}as IResponse)
  } catch (error: any) {
    console.log(error.message)
    res
      .status(500)
      .json({
        success: false,
        message: "deleteSingleSkill internal error",
        error: error.message,
      } as IResponse);
  }
};

const deleteAllSkill = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const deleteAll = await Skill.deleteMany();
    if (deleteAll.deletedCount === 0) {
      res.status(400).json({
        success: true,
        message: "No Skill found to delete",
      } as IResponse);
      return;
    }
    res.status(200).json({
      success: true,
      message: `Deleted ${deleteAll.deletedCount} skill successfully`,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "deleteAllSkill internal error",
      error: error.message,
    } as IResponse);
  }
};

const updateSkill = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updateSkill = await Skill.findByIdAndUpdate(id,updateData,{new:true})
    if(!updateSkill){
      res.status(400).json({
      success: false,
      message: "updateSkill error",
    } as IResponse);
    return
    }
    res.status(200).json({success:true,message:"Skill update successfully",data:updateSkill}as IResponse)
  }
   catch (error:any) {
     res.status(500).json({
      success: false,
      message: "updateSkill internal error",
      error: error.message,
    } as IResponse);
  }}
export { addSkill,getAllSkill,getASingleSkill,deleteSingleSkill,deleteAllSkill,updateSkill };
