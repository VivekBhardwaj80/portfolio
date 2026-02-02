import { Response, Request } from "express";
import { IResponse } from "../interfaces/responseInterface.js";
import Education from "../models/education.model.js";

const addEducation = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      level,
      institution,
      institutionName,
      fieldOfStudy,
      degree,
      startYear,
      endYear,
      grade,
      description,
      location,
      isCurrent,
    } = req.body;
    if (!level || !institution || !institutionName || !startYear) {
      res.status(400).json({
        success: false,
        message: "Level, Institution, and Start Year are required",
      } as IResponse);
      return;
    }
    if(!isCurrent && !endYear){
        res.status(400).json({
        success: false,
        message: "EndDate is required when isCurrent is false",
      } as IResponse);
      return;
    }
    const existingEducation = await Education.findOne({ level });
    if (existingEducation) {
      res.status(400).json({
        success: false,
        message: "Education already exists for this level. Please update Education",
      } as IResponse);
      return;
    }
    const education = await Education.create({
      level,
      institution,
      fieldOfStudy,
      degree,
      startYear,
      endYear,
      grade,
      description,
      location,
      isCurrent,
      institutionName,
    });
    res.status(201).json({
      success: true,
      message: "Education added successfully",
      data: education,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "internal add Education error",
      error: error.message,
    } as IResponse);
  }
};

const getAllEducation = async (req: Request, res: Response): Promise<void> => {
  try {
    const existingEducation = await Education.find();
    if (!existingEducation) {
      res.status(400).json({
        success: false,
        message: "Don't have any Education",
      } as IResponse);
      return;
    }
    res.status(200).json({
      success: true,
      message: "All Education",
      data: existingEducation,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "getAllEducation internal error",
      error: error.message,
    } as IResponse);
  }
};

const getASingleEducation = async (
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
    const findSingleEducation = await Education.findById(id);
    if (!findSingleEducation) {
      res
        .status(400)
        .json({ success: false, message: "Education not found" } as IResponse);
    }
    res
      .status(200)
      .json({ success: true, data: findSingleEducation } as IResponse);
  } catch (error: any) {
    res.status(200).json({
      success: true,
      message: "getASingleEducation internal Error",
      error: error.message,
    } as IResponse);
  }
};

const deleteSingleEducation = async (
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
    const deleteEducation = await Education.findByIdAndDelete(id);
    if (!deleteEducation) {
      res
        .status(400)
        .json({ success: false, message: "Education not found" } as IResponse);
    }
    res
      .status(200)
      .json({
        success: true,
        message: `delete ${deleteEducation?.level} successfully`,
      } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "deleteSingleEducation internal error",
      error: error.message,
    } as IResponse);
  }
};

const deleteAllEducation = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const deleteAll = await Education.deleteMany();
    if (deleteAll.deletedCount === 0) {
      res.status(400).json({
        success: true,
        message: "No Education found to delete",
      } as IResponse);
      return;
    }
    res.status(200).json({
      success: true,
      message: `Deleted ${deleteAll.deletedCount} Education successfully`,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "deleteAllEducation internal error",
      error: error.message,
    } as IResponse);
  }
};

const updateEducation = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updateEducation = await Education.findByIdAndUpdate(
      id,
      updateData,
      { new: true },
    );
    if (!updateEducation) {
      res.status(400).json({
        success: false,
        message: "updateEducation error",
      } as IResponse);
      return;
    }
    res
      .status(200)
      .json({
        success: true,
        message: "Education update successfully",
        data: updateEducation,
      } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "updateEducation internal error",
      error: error.message,
    } as IResponse);
  }
};
export {
  addEducation,
  getAllEducation,
  getASingleEducation,
  deleteSingleEducation,
  deleteAllEducation,
  updateEducation,
};
