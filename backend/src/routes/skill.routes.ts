import { Router } from "express";
import {
  addSkill,
  deleteAllSkill,
  deleteSingleSkill,
  getAllSkill,
  getASingleSkill,
  updateSkill,
} from "../controllers/skill.controller.js";
import isAuth from "../middlewares/isAuth.js";
import upload from "../middlewares/multer.js";

const skillRouter = Router();
skillRouter.post("/", isAuth,upload.single('image'), addSkill);
skillRouter.get("/", getAllSkill);
skillRouter.get("/:id", getASingleSkill);
skillRouter.put("/:id", isAuth, updateSkill);
skillRouter.delete("/:id", isAuth, deleteSingleSkill);
skillRouter.delete("/",isAuth, deleteAllSkill);
export default skillRouter;
