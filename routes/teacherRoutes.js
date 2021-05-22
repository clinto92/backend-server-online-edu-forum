import express from "express";
import cors from "cors";
const router = express.Router();

import { signin, getTeacherInfo } from "../controllers/teacherControl.js";
const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
  }

router.post("/signin", cors(corsOptions), signin);
router.get("/teachers-info", cors(corsOptions), getTeacherInfo);

export default router;
