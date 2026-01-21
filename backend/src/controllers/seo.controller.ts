import { Response, Request } from "express";
import { IResponse } from "../interfaces/responseInterface.js";;
import Seo from "../models/seo.model.js";
import cloudinary from "../config/cloudinary.js";

const createSeo = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      page,
      title,
      description,
      keyword,
      ogTitle,
      ogDescription,
    } = req.body;
    if (!page || !title || !description) {
      res.status(400).json({
        success: false,
        message: "Page, Title, and Description are required",
      } as IResponse);
      return;
    }
    let imageUrl: string = "";
    if (req.file) {
      const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
      const result = await cloudinary.uploader.upload(base64Image, {
        folder: "Seo",
      });
      imageUrl = result.secure_url;
    }
    const existingSeo = await Seo.findOne({ page });
    if (existingSeo) {
      res.status(400).json({
        success: false,
        message: "Page already exists",
      } as IResponse);
      return;
    }
    const seo = await Seo.create({
      page,
      title,
      description,
      keyword,
      ogTitle,
      ogDescription,
      ogImage: imageUrl,
    });
    res.status(200).json({
      success: true,
      message: "Seo added successfully",
      data: seo,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "internal create Seo error",
      error: error.message,
    } as IResponse);
  }
};

const getAllSeo = async (req: Request, res: Response): Promise<void> => {
  try {
    const existingSeo = await Seo.find();
    if (!existingSeo) {
      res.status(400).json({
        success: false,
        message: "Don't have any Page",
      } as IResponse);
      return;
    }
    res.status(200).json({
      success: true,
      message: "All Pages",
      data: existingSeo,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "getAllSeo internal error",
      error: error.message,
    } as IResponse);
  }
};

const getASingleSeo = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = req.query.page as string;
    if (!page) {
      res
        .status(400)
        .json({ success: false, message: "Page is required" } as IResponse);
      return;
    }
    const findSinglePage = await Seo.findOne({ page });
    if (!findSinglePage) {
      res
        .status(404)
        .json({ success: false, message: "Page not found" } as IResponse);
      return;
    }
    res.status(200).json({ success: true, data: findSinglePage } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "getASingleSeo internal Error",
      error: error.message,
    } as IResponse);
  }
};

const deleteSingleSeo = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = req.query.page as string;
    if (!page) {
      res
        .status(400)
        .json({ success: false, message: "Page is required" } as IResponse);
      return;
    }
    const deleteSeoPage = await Seo.findOneAndDelete({ page });
    if (!deleteSeoPage) {
      res
        .status(404)
        .json({ success: false, message: "page not found" } as IResponse);
      return;
    }
    res.status(200).json({
      success: true,
      message: `delete ${deleteSeoPage?.page} page successfully`,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "deleteSingleSeo internal error",
      error: error.message,
    } as IResponse);
  }
};

const updateSeoPage = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = req.query.page as string;
    const updateData = req.body;
    const updatePage = await Seo.findOneAndUpdate(
      {page},
      updateData,
      { new: true },
    );
    if (!updatePage) {
      res.status(404).json({
        success: false,
        message: "Page not found",
      } as IResponse);
      return;
    }
    res.status(200).json({
      success: true,
      message: "Experience update successfully",
      data: updatePage,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "updateSeoPage internal error",
      error: error.message,
    } as IResponse);
  }
};
export {
  createSeo,
  getAllSeo,
  getASingleSeo,
  deleteSingleSeo,
  updateSeoPage,
};
