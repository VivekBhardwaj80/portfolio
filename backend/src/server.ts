  import express from "express";
  import { config } from "dotenv";
  import cookieParser from "cookie-parser";
  import cors from "cors";
  import connectDB from "./config/db.js";
  import { createAdmin } from "./controllers/user.controller.js";
  import mainRouter from "./routes/MainRoute/main.route.js";

  config();


  const app = express();
  const port = process.env.PORT || 5000;



  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({
    origin:"https://portfolio-site-oya4.onrender.com",
    credentials:true
  }));
  app.use(cookieParser());

  // Routes
  app.use("/api/v1", mainRouter);

  const startServer = async () => {
    try {
      await connectDB();
      await createAdmin();
      app.listen(port);
    } catch (error) {
      throw new Error("Server startup failed:");
    }
  };

  startServer();
