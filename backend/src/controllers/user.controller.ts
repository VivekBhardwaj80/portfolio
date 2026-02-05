import { Request, Response } from "express";
import { IResponse } from "../interfaces/responseInterface.js";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateToken from "../utils/generate.token.js";

const createAdmin = async (): Promise<void> => {
  try {
    if (
      !process.env.ADMIN_EMAIL ||
      !process.env.ADMIN_NAME ||
      !process.env.ADMIN_PASSWORD
    ) {
      throw new Error("Missing Environment Variable of admin");
    }
    const existingUser = await User.findOne({ email: process.env.ADMIN_EMAIL });
    if (existingUser) return;
    const hashPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD!, 10);
    const phoneNumber = process.env.ADMIN_PHONE
      ? Number(process.env.ADMIN_PHONE)
      : undefined;
    const createUser = await User.create({
      name: process.env.ADMIN_NAME,
      password: hashPassword,
      email: process.env.ADMIN_EMAIL,
      phone: phoneNumber,
    });
  } catch (error: any) {
    throw new Error("Error to created admin")
  }
};
const loginAdmin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    console.log(email,password)
    if (!email || !password) {
      res.status(400).json({
        success: false,
        message: "all field is required",
      } as IResponse);
      return;
    }
    const findUser = await User.findOne({ email });
    if (!findUser) {
      res.status(400).json({
        success: false,
        message: "User does not Exist",
      } as IResponse);
      return;
    }
    const verifyPassword = await bcrypt.compare(password, findUser.password);
    if (!verifyPassword) {
      res.status(400).json({
        success: false,
        message: "Invalid User name or password",
      } as IResponse);
      return;
    }
    const token = generateToken(findUser._id.toString());
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      success: true,
      message: `Welcome Back ${findUser.name}`,
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "createAdmin internal error",
      error: error.message,
    } as IResponse);
  }
};

const logoutAdmin = async (req: Request, res: Response): Promise<void> => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite:"none"
    });
    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "logout Error",
      error: error.message,
    } as IResponse);
  }
};

export { createAdmin, loginAdmin, logoutAdmin };
