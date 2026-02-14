import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { IResponse } from "../interfaces/responseInterface.js";
import User from "../models/user.model.js";

interface JwtPayload {
  id: string;
}

const isAuth = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const token =
      req.cookies?.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
      res
        .status(401)
        .json({ success: false, message: "Unauthorized User" } as IResponse);
      return;
    }
    const verifyToken = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as unknown as JwtPayload;

    const admin = await User.findById(verifyToken.id).select("-password");
    if (!admin) {
      res
        .status(401)
        .json({ success: false, message: "Unauthorized User" } as IResponse);
      return;
    }
    (req as any).admin = admin;
    next();
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Authentication failed",
      error: error.message,
    } as IResponse);
  }
};

export default isAuth;
