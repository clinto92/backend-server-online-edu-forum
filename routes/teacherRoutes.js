import express from "express";
const router = express.Router();

import { signin, getTeacherInfo } from "../controllers/teacherControl.js";

router.post("/signin", signin);
router.get("/teachers-info", getTeacherInfo);

export default router;
