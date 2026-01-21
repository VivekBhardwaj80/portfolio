import { Response, Request } from "express";
import { IResponse } from "../interfaces/responseInterface.js";
import Feedback from "../models/feedback.model.js";
import validate from "email-validator";

const submitFeedback = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, feedbackType, message, company, role } = req.body;
    if (email && !validate.validate(email)) {
      res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
      return;
    }

    if (!feedbackType || !message) {
      res.status(400).json({
        success: false,
        message: "Feedback Type,and Message are required",
      } as IResponse);
      return;
    }
    const validTypes = [
      "General Feedback",
      "Suggestion",
      "Bug / Issue",
      "Recruitment",
      "Other",
    ];

    if (!validTypes.includes(feedbackType)) {
      res.status(400).json({
        success: false,
        message: "Invalid Feedback Type",
      } as IResponse);
      return;
    }

    if (feedbackType === "Recruiter" && (!company || !role)) {
      res.status(400).json({
        success: false,
        message: "Company and role are required when feedback is Recruiter",
      } as IResponse);
      return;
    }
    await Feedback.create({
      name,
      email,
      feedbackType,
      message,
      company,
      role,
    });
    res.status(201).json({
      success: true,
      message: "Feedback submit successfully",
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "internal submit Feedback error",
      error: error.message,
    } as IResponse);
  }
};

const getAllFeedback = async (req: Request, res: Response): Promise<void> => {
  try {
    const existingFeedback = await Feedback.find();
    if (existingFeedback.length === 0) {
      res.status(400).json({
        success: false,
        message: "Don't have any Feedback",
      } as IResponse);
      return;
    }
    res.status(200).json({
      success: true,
      message: "All Feedback",
      data: existingFeedback,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "getAllFeedback internal error",
      error: error.message,
    } as IResponse);
  }
};

const getASingleFeedback = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;
    if (!id) {
      res
        .status(400)
        .json({ success: false, message: "Id is required" } as IResponse);
      return;
    }
    const findSingleFeedback = await Feedback.findById(id);
    if (!findSingleFeedback) {
      res.status(400).json({
        success: false,
        message: "No feedback Available on this ID",
      } as IResponse);
      return;
    }
    res
      .status(200)
      .json({
        success: true,
        message: "Feedback found",
        data: findSingleFeedback,
      } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "getASingleFeedback internal Error",
      error: error.message,
    } as IResponse);
  }
};

const deleteSingleFeedback = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;
    if (!id) {
      res
        .status(400)
        .json({ success: false, message: "Id is required" } as IResponse);
      return;
    }
    const deleteFeedback = await Feedback.findByIdAndDelete(id);
    if (!deleteFeedback) {
      res.status(400).json({
        success: false,
        message: "Feedback not available",
      } as IResponse);
      return;
    }
    res.status(200).json({
      success: true,
      message: `delete ${deleteFeedback?.name ? deleteFeedback?.name : deleteFeedback?.feedbackType} successfully`,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "deleteSingleFeedback internal error",
      error: error.message,
    } as IResponse);
  }
};

const deleteAllFeedback = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const deleteAll = await Feedback.deleteMany();
    if (deleteAll.deletedCount === 0) {
      res.status(404).json({
        success: false,
        message: "No Feedback found to delete",
      } as IResponse);
      return;
    }
    res.status(200).json({
      success: true,
      message: `Deleted ${deleteAll.deletedCount} Feedback successfully`,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "deleteAllFeedback internal error",
      error: error.message,
    } as IResponse);
  }
};

const markFeedbackRead = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updateFeedback = await Feedback.findByIdAndUpdate(
      id,
      { isRead: true },
      { new: true },
    );
    if (!updateFeedback) {
      res.status(404).json({
        success: false,
        message: "Feedback not found",
      } as IResponse);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Feedback mark as read",
      data: updateFeedback,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "markFeedbackRead internal error",
      error: error.message,
    } as IResponse);
  }
};
export {
  submitFeedback,
  getAllFeedback,
  getASingleFeedback,
  deleteSingleFeedback,
  deleteAllFeedback,
  markFeedbackRead,
};
