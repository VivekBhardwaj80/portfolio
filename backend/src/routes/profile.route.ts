import { Router } from "express";
import {
  addProfile,
  deleteProfile,
  getProfile,
  updateProfile,
} from "../controllers/profile.controller.js";
import upload from "../middlewares/multer.js";
import isAuth from "../middlewares/isAuth.js";

const profileRouter = Router();
profileRouter.post("/add", isAuth, upload.single("image"), addProfile);
profileRouter.get("/profile", getProfile);
profileRouter.delete("/delete", isAuth, deleteProfile);
profileRouter.patch("/update",isAuth, upload.single("image"), updateProfile);

export default profileRouter;
