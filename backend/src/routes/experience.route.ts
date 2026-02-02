import { Router } from "express";
import {
  addExperience,
  getAllExperience,
  getASingleExperience,
  deleteSingleExperience,
  deleteAllExperience,
  updateExperience,
} from "../controllers/experience.controller.js";
import isAuth from "../middlewares/isAuth.js";
import upload from "../middlewares/multer.js";

const experienceRouter = Router();
experienceRouter.post("/", isAuth,upload.single("image"), addExperience);
experienceRouter.get("/", getAllExperience);
experienceRouter.get("/:id", getASingleExperience);
experienceRouter.put("/:id", isAuth, updateExperience);
experienceRouter.delete("/:id", isAuth, deleteSingleExperience);
experienceRouter.delete("/", isAuth, deleteAllExperience);

export default experienceRouter;
