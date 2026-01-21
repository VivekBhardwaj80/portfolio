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

const skillRouter = Router();
skillRouter.post("/add", isAuth, addSkill);
skillRouter.get("/all-skills", getAllSkill);
skillRouter.get("/single-skill/:id", getASingleSkill);
skillRouter.delete("/delete/:id", isAuth, deleteSingleSkill);
skillRouter.delete("/delete-all",isAuth, deleteAllSkill);
skillRouter.put("/update/:id", isAuth, updateSkill);

export default skillRouter;
