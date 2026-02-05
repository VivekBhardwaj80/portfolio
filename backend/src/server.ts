  // import express from "express";
  // import { config } from "dotenv";
  // import cookieParser from "cookie-parser";
  // import cors from "cors";
  // import connectDB from "./config/db.js";
  // import { createAdmin } from "./controllers/user.controller.js";
  // import mainRouter from "./routes/MainRoute/main.route.js";

  // config();


  // const app = express();
  // const port = process.env.PORT || 5000;



  // app.use(express.json());
  // app.use(express.urlencoded({ extended: true }));
  // app.use(cors({
  //   origin:"https://portfolio-site-oya4.onrender.com",
  //   credentials:true
  // }));
  // app.use(cookieParser());

  // // Routes
  // app.use("/api/v1", mainRouter);

  // const startServer = async () => {
  //   try {
  //     await connectDB();
  //     await createAdmin();
  //     app.listen(port);
  //   } catch (error) {
  //     throw new Error("Server startup failed:");
  //   }
  // };

  // startServer();
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

// CORS configuration
const allowedOrigins = [
  "https://portfolio-site-oya4.onrender.com", // Your frontend
  "http://localhost:3000", // Local development
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `CORS policy does not allow access from ${origin}`;
      console.error("CORS blocked for origin:", origin);
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Log all requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

// Routes
app.use("/api/v1", mainRouter);

// Root endpoint
app.get("/", (req, res) => {
  res.json({ 
    message: "Backend API is running",
    version: "1.0.0",
    endpoints: {
      contact: "/api/v1/contact",
      contactTest: "/api/v1/contact/test",
      health: "/api/v1/contact/health"
    }
  });
});

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "OK", 
    timestamp: new Date().toISOString(),
    service: "portfolio-backend"
  });
});

const startServer = async () => {
  try {
    console.log("🔗 Connecting to database...");
    await connectDB();
    console.log("✅ Database connected successfully");
    
    console.log("👤 Checking admin user...");
    await createAdmin();
    console.log("✅ Admin user check completed");
    
    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
      console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`🔗 Backend URL: http://localhost:${port}`);
      console.log(`🔗 API Base: http://localhost:${port}/api/v1`);
    });
  } catch (error) {
    console.error("❌ Server startup failed:", error);
    process.exit(1);
  }
};

startServer();