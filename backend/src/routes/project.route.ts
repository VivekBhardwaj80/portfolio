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
projectRouter.post("/", isAuth, upload.single("image"), addProject);
projectRouter.get("/", getAllProjects);
projectRouter.get("/:id", getASingleProject);
projectRouter.put("/:id", isAuth, upload.single("image"), updateProject);
projectRouter.delete("/:id", isAuth, deleteSingleProject);
projectRouter.delete("/", isAuth, deleteAllProjects);

export default projectRouter;
