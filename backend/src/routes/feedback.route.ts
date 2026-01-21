import { Router } from "express";
import {
  deleteAllFeedback,
  deleteSingleFeedback,
  getAllFeedback,
  getASingleFeedback,
  markFeedbackRead,
  submitFeedback,
} from "../controllers/feedback.controller.js";
import isAuth from "../middlewares/isAuth.js";

const feedbackRouter = Router();
feedbackRouter.post("/", submitFeedback);
feedbackRouter.get("/", isAuth, getAllFeedback);
feedbackRouter.get("/:id", isAuth, getASingleFeedback);
feedbackRouter.patch("/:id",isAuth, markFeedbackRead);
feedbackRouter.delete("/:id", isAuth, deleteSingleFeedback);
feedbackRouter.delete("/", isAuth, deleteAllFeedback);

export default feedbackRouter;
