// import { Router } from "express";
// import createContact from "../controllers/contact.controller.js";

// const contactRouter = Router()

// contactRouter.post('/',createContact)

// export default contactRouter

import { Router } from "express";
import createContact from "../controllers/contact.controller.js";

const contactRouter = Router();

// Test endpoint
contactRouter.get('/test', (req, res) => {
  console.log("Test endpoint hit");
  res.status(200).json({ 
    success: true, 
    message: 'Contact API is working',
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
contactRouter.get('/health', (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: 'Contact service is healthy',
    timestamp: new Date().toISOString()
  });
});

// Create contact endpoint
contactRouter.post('/', createContact);

export default contactRouter;