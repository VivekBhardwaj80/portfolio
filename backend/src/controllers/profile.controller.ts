import { Response, Request } from "express";
import { IResponse } from "../interfaces/responseInterface.js";
import Profile from "../models/profile.model.js";
import cloudinary from "../config/cloudinary.js";
import validate from "email-validator";

  const addProfile = async (req: Request, res: Response): Promise<void> => {
    try {
      const {
        name,
        headline,
        bio,
        location,
        email,
        phone,
        website,
        resumeUrl,
        github,
        linkedIn,
        twitter,
        instagram,
        facebook,
      } = req.body;
      if (!name || !headline || !bio) {
        res.status(400).json({
          success: false,
          message: "Name, Headline, and Bio are required",
        } as IResponse);
        return;
      }
      const existingProfile = await Profile.findOne();
      if (existingProfile) {
        res.status(400).json({
          success: false,
          message: "Profile already exist. Please update it.",
        } as IResponse);
        return;
      }
      if(email && !validate.validate(email)){
          res.status(400).json({
          success: false,
          message: "Invalid Email format",
        } as IResponse);
        return;
      }
      let profileImageUrl: string = "";
      if (req.file) {
        const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
        const result = await cloudinary.uploader.upload(base64Image, {
          folder: "Profile",
        });
        profileImageUrl = result.secure_url;
      }

      const profileCreate = await Profile.create({
        name,
        headline,
        bio,
        location,
        email,
        phone,
        website,
        resumeUrl,
        socialLinks: {
          github,
          linkedIn,
          instagram,
          twitter,
          facebook,
        },
        profileImage: profileImageUrl ? profileImageUrl : "",
      });
      res.status(201).json({
        success: true,
        message: "Profile added successfully",
        data: profileCreate,
      } as IResponse);
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "internal add Profile error",
        error: error.message,
      } as IResponse);
    }
  };

const getProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const existingProfile = await Profile.findOne();
    if (!existingProfile) {
      res.status(404).json({
        success: false,
        message: "Profile not found",
      } as IResponse);
      return;
    }
    res.status(200).json({
      success: true,
      data: existingProfile,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "get Profile internal error",
      error: error.message,
    } as IResponse);
  }
};


const deleteProfile = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const existingProfile = await Profile.findOne()
    if (!existingProfile) {
      res
        .status(404)
        .json({ success: false, message: "Profile not found" } as IResponse);
        return
    }

    await Profile.deleteOne(existingProfile._id);
    res
      .status(200)
      .json({
        success: true,
        message: `profile deleted successfully`,
      } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "deleteProfile internal error",
      error: error.message,
    } as IResponse);
  }
};


const updateProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const updateData = req.body;
    const existingProfile = await Profile.findOne();
    if (!existingProfile) {
      res.status(404).json({
        success: false,
        message: "Profile not found",
      } as IResponse);
      return;
    }
    if(updateData.email && !validate.validate(updateData.email)){
       res.status(400).json({
        success: false,
        message: "Wrong email formate",
      } as IResponse);
      return; 
    }

    if(req.file){
        const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`
        const result = await cloudinary.uploader.upload(base64Image,{folder:"Profile"})
        updateData.profileImage = result.secure_url
    }
    
    const updateProfile = await Profile.findByIdAndUpdate(
        existingProfile._id,
      updateData,
      { new: true },
    );
    if (!updateProfile) {
      res.status(400).json({
        success: false,
        message: "updateProfile error",
      } as IResponse);
      return;
    }
    res
      .status(200)
      .json({
        success: true,
        message: "Profile update successfully",
        data: updateProfile,
      } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "updateProfile internal error",
      error: error.message,
    } as IResponse);
  }
};
export {
  addProfile,
  getProfile,
  deleteProfile,
  updateProfile,
};
