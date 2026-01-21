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
feedbackRouter.post("/submit", submitFeedback);
feedbackRouter.get("/all-feedback", isAuth, getAllFeedback);
feedbackRouter.get("/single-feedback/:id", isAuth, getASingleFeedback);
feedbackRouter.delete("/delete/:id", isAuth, deleteSingleFeedback);
feedbackRouter.delete("/delete-all", isAuth, deleteAllFeedback);
feedbackRouter.patch("/read/:id",isAuth, markFeedbackRead);

export default feedbackRouter;
