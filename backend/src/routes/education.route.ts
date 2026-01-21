import { Router } from "express";
import {
  addEducation,
  getAllEducation,
  getASingleEducation,
  deleteSingleEducation,
  deleteAllEducation,
  updateEducation,
} from "../controllers/education.controller.js";
import isAuth from "../middlewares/isAuth.js";

const educationRouter = Router();
educationRouter.post("/", isAuth, addEducation);
educationRouter.get("/", getAllEducation);
educationRouter.get("/:id", getASingleEducation);
educationRouter.put("/:id", isAuth, updateEducation);
educationRouter.delete("/:id", isAuth, deleteSingleEducation);
educationRouter.delete("/", isAuth, deleteAllEducation);

export default educationRouter;
