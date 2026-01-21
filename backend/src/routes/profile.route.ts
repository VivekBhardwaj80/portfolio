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
profileRouter.post("/", isAuth, upload.single("image"), addProfile);
profileRouter.get("/", getProfile);
profileRouter.patch("/",isAuth, upload.single("image"), updateProfile);
profileRouter.delete("/", isAuth, deleteProfile);

export default profileRouter;
