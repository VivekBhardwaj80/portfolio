import { Request, Response } from "express";
import { IResponse } from "../interfaces/responseInterface.js";

const verifyAdmin = async (req: Request, res: Response): Promise<void> => {
  try {
    const verify = req.admin;
    if (!verify) {
      res
        .status(401)
        .json({ success: false, message: "Unauthorized User" } as IResponse);
      return;
    }
    res
      .status(200)
      .json({
        success: true,
        message: "Authorized",
        data: req.admin,
      } as IResponse);
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "internal error to verify",
      } as IResponse);
  }
};

export default verifyAdmin
