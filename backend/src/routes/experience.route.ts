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

const experienceRouter = Router();
experienceRouter.post("/add", isAuth, addExperience);
experienceRouter.get("/all-experience", getAllExperience);
experienceRouter.get("/single-experience/:id", getASingleExperience);
experienceRouter.delete("/delete/:id", isAuth, deleteSingleExperience);
experienceRouter.delete("/delete-all", isAuth, deleteAllExperience);
experienceRouter.put("/update/:id", isAuth, updateExperience);

export default experienceRouter;
