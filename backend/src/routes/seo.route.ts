import { Router } from "express";
import {
  createSeo,
  deleteSingleSeo,
  getAllSeo,
  getASingleSeo,
  updateSeoPage,
} from "../controllers/seo.controller.js";
import isAuth from "../middlewares/isAuth.js";
import upload from "../middlewares/multer.js";

const seoRouter = Router();
seoRouter.post("/", isAuth, upload.single("image"), createSeo);
seoRouter.get("/", getAllSeo);
seoRouter.get("/single/", getASingleSeo);
seoRouter.delete("/", isAuth, deleteSingleSeo);
seoRouter.put("/", isAuth, updateSeoPage);

export default seoRouter;
