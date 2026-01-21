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
educationRouter.post("/add", isAuth, addEducation);
educationRouter.get("/all-education", getAllEducation);
educationRouter.get("/single-education/:id", getASingleEducation);
educationRouter.delete("/delete/:id", isAuth, deleteSingleEducation);
educationRouter.delete("/delete-all", isAuth, deleteAllEducation);
educationRouter.put("/update/:id", isAuth, updateEducation);

export default educationRouter;
