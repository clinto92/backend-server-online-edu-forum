import express from "express";
const router = express.Router();

import { signin, signup, getTeacherInfo } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.get('/teacher-info', getTeacherInfo);

export default router;