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
seoRouter.post("/create", isAuth, upload.single("image"), createSeo);
seoRouter.get("/all-seo", getAllSeo);
seoRouter.get("/single-seo/", getASingleSeo);
seoRouter.delete("/delete", isAuth, deleteSingleSeo);
seoRouter.put("/update", isAuth, updateSeoPage);

export default seoRouter;
