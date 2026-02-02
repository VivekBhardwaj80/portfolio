import { Response, Request } from "express";
import { IResponse } from "../interfaces/responseInterface.js";
import Experience from "../models/experience.model.js";
import cloudinary from "../config/cloudinary.js";

const addExperience = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      company,
      role,
      startDate,
      location,
      endDate,
      description,
      isCurrent,
      working,
    } = req.body;  
let { technologies } = req.body;
if (typeof technologies === "string") {
  technologies = technologies.split(",").map((t) => t.trim());
}

    if (!company || !role || !startDate) {
      res.status(400).json({
        success: false,
        message: "Company, Role, and StartDate are required",
      } as IResponse);
      return;
    }
    if (!isCurrent && !endDate) {
      res.status(400).json({
        success: false,
        message: "EndDate is required when isCurrent is false",
      } as IResponse);
      return;
    }
    let logo: string = "";
    if (req.file) {
      const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
      const result = await cloudinary.uploader.upload(base64Image, {
        folder: "experience",
      });
      logo = result.secure_url;
    }
    const existingExperience = await Experience.findOne({ company });
    if (existingExperience) {
      res.status(400).json({
        success: false,
        message: "Experience already exists for this company",
      } as IResponse);
      return;
    }
    const experience = await Experience.create({
      company,
      role,
      startDate,
      endDate,
      location,
      description,
      isCurrent,
      logo,
      technologies,
      working
    });
    res.status(201).json({
      success: true,
      message: "Experience added successfully",
      data: experience,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "internal add Experience error",
      error: error.message,
    } as IResponse);
  }
};

const getAllExperience = async (req: Request, res: Response): Promise<void> => {
  try {
    const existingExperience = await Experience.find();
    if (!existingExperience) {
      res.status(400).json({
        success: false,
        message: "Don't have any Experience",
      } as IResponse);
      return;
    }
    res.status(200).json({
      success: true,
      message: "All Experience",
      data: existingExperience,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "getAllExperience internal error",
      error: error.message,
    } as IResponse);
  }
};

const getASingleExperience = async (
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
    const findSingleExperience = await Experience.findById(id);
    if (!findSingleExperience) {
      res
        .status(400)
        .json({ success: false, message: "Experience not found" } as IResponse);
    }
    res
      .status(200)
      .json({ success: true, data: findSingleExperience } as IResponse);
  } catch (error: any) {
    res.status(200).json({
      success: true,
      message: "getASingleExperience internal Error",
      error: error.message,
    } as IResponse);
  }
};

const deleteSingleExperience = async (
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
    const deleteExperience = await Experience.findByIdAndDelete(id);
    if (!deleteExperience) {
      res
        .status(400)
        .json({ success: false, message: "Experience not found" } as IResponse);
    }
    res.status(200).json({
      success: true,
      message: `delete ${deleteExperience?.company} successfully`,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "deleteSingleExperience internal error",
      error: error.message,
    } as IResponse);
  }
};

const deleteAllExperience = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const deleteAll = await Experience.deleteMany();
    if (deleteAll.deletedCount === 0) {
      res.status(400).json({
        success: true,
        message: "No Experience found to delete",
      } as IResponse);
      return;
    }
    res.status(200).json({
      success: true,
      message: `Deleted ${deleteAll.deletedCount} Experience successfully`,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "deleteAllExperience internal error",
      error: error.message,
    } as IResponse);
  }
};

const updateExperience = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updateExperience = await Experience.findByIdAndUpdate(
      id,
      updateData,
      { new: true },
    );
    if (!updateExperience) {
      res.status(400).json({
        success: false,
        message: "updateExperience error",
      } as IResponse);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Experience update successfully",
      data: updateExperience,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "updateExperience internal error",
      error: error.message,
    } as IResponse);
  }
};
export {
  addExperience,
  getAllExperience,
  getASingleExperience,
  deleteSingleExperience,
  deleteAllExperience,
  updateExperience,
};
