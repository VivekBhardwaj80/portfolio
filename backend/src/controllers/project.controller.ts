import { Request, Response } from "express";
import { IResponse } from "../interfaces/responseInterface.js";
import Projects from "../models/project.model.js";
import cloudinary from "../config/cloudinary.js";

const addProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      title,
      description,
      techStack,
      status,
      date,
      name,
      githubLink,
      liveDemo,
    } = req.body;
    if (!title || !description || !techStack || !status || !githubLink) {
      res.status(400).json({
        success: false,
        message: "all field is required",
      } as IResponse);
      return;
    }
    const techStackArray = typeof techStack === 'string' ? techStack.split(',') : techStack;

    let image: string | undefined;
    if (!req.file) {
      res.status(400).json({
        success: false,
        message: "Image is required",
      } as IResponse);
      return;
    }
    try {
      const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
      const result = await cloudinary.uploader.upload(base64Image, {
        folder: "projects",
      });
      image = result.secure_url;
    } catch (err) {
      console.error("Cloudinary upload failed:", err);
      res.status(500).json({
        success: false,
        message: "Image upload failed",
        error: (err as Error).message,
      } as IResponse);
      return;
    }
    const findProjectExist = await Projects.findOne({ title });
    if (findProjectExist) {
      res.status(400).json({
        success: false,
        message: "Project already exist",
      } as IResponse);
      return;
    }
    await Projects.create({
      title,
      status,
      date,
      name,
      description,
      techStack:techStackArray,
      githubLink,
      imageUrl: image ?? "",
      liveDemo,
    });
    res.status(201).json({
      success: true,
      message: "Project uploaded successfully",
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "addProject internal error",
      error: error.message,
    } as IResponse);
  }
};

const getAllProjects = async (req: Request, res: Response): Promise<void> => {
  try {
    const existingProjects = await Projects.find();
    if (!existingProjects) {
      res.status(400).json({
        success: false,
        message: "Don't have any project",
      } as IResponse);
      return;
    }
    res.status(200).json({
      success: true,
      message: "All Projects",
      data: existingProjects,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "getAllProjects internal error",
      error: error.message,
    } as IResponse);
  }
};

const getASingleProject = async (
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
    const findSingleProject = await Projects.findById(id);
    if (!findSingleProject) {
      res
        .status(400)
        .json({ success: false, message: "Project not found" } as IResponse);
    }
    res
      .status(200)
      .json({ success: true, data: findSingleProject } as IResponse);
  } catch (error: any) {
    res.status(200).json({
      success: true,
      message: "fetASingleProject internal Error",
      error: error.message,
    } as IResponse);
  }
};

const deleteSingleProject = async (
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
    const deleteProject = await Projects.findByIdAndDelete(id);
    if (!deleteProject) {
      res
        .status(400)
        .json({ success: false, message: "Project not found" } as IResponse);
    }
    res.status(200).json({
      success: true,
      message: `delete ${deleteProject?.title} successfully`,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "deleteSingleProject internal error",
      error: error.message,
    } as IResponse);
  }
};

const deleteAllProjects = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const deleteAll = await Projects.deleteMany();
    if (deleteAll.deletedCount === 0) {
      res.status(400).json({
        success: true,
        message: "No projects found to delete",
      } as IResponse);
      return;
    }
    res.status(200).json({
      success: true,
      message: `Deleted ${deleteAll.deletedCount} project successfully`,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "getAllProjects internal error",
      error: error.message,
    } as IResponse);
  }
};

const updateProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    if (req.file) {
      const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
      let result = await cloudinary.uploader.upload(base64Image, {
        folder: "projects",
      });
      updateData.imageUrl = result.secure_url;
    }
    const updatedProject = await Projects.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedProject) {
      res
        .status(400)
        .json({ success: false, message: "Project not found" } as IResponse);
    }
    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: updatedProject,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: true,
      message: "updateProject internal Error",
      error: error.message,
    } as IResponse);
  }
};

export {
  addProject,
  getAllProjects,
  deleteAllProjects,
  updateProject,
  getASingleProject,
  deleteSingleProject,
};
