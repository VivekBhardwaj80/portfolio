import { Router } from "express";
import {
  addProject,
  deleteAllProjects,
  getAllProjects,
  getASingleProject,
  updateProject,
  deleteSingleProject,
} from "../controllers/project.controller.js";
import upload from "../middlewares/multer.js";
import isAuth from "../middlewares/isAuth.js";

const projectRouter = Router();
projectRouter.post("/add", isAuth, upload.single("image"), addProject);
projectRouter.get("/all-projects", getAllProjects);
projectRouter.get("/single-project/:id", getASingleProject);
projectRouter.delete("/delete/:id", isAuth, deleteSingleProject);
projectRouter.delete("/delete-all", isAuth, deleteAllProjects);
projectRouter.put("/update/:id", isAuth, upload.single("image"), updateProject);

export default projectRouter;
