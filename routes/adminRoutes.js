import cors from "cors";
import express from "express";
const router = express.Router();
import {
 
  createPostControl,
  deleteStudentControl,
  deleteTeacherControl,
  getAdminInfoControl,
  getPostsControl,
  getTeacherInfoControl,
  signinControl,
  signupTeacherControl,
  updateAdminControl,
  updateStudentControl,
  updateTeacherControl,
} from "../controllers/adminControl.js";

const corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
}
// "Access-Control-Allow-Credentials": true,
// import auth from "../middleware/auth.js";
// admin
router.post("/admin-signin", cors(corsOptions), signinControl);
router.get("/admin-info", cors(corsOptions), getAdminInfoControl);
router.patch("/update-admin/:id", cors(corsOptions), updateAdminControl);

// teacher
router.post("/teacher-signup", cors(corsOptions), signupTeacherControl);
router.get("/teachers-info", cors(corsOptions), getTeacherInfoControl);
router.patch("/update-teacher/:id", cors(corsOptions), updateTeacherControl);
router.delete("/delete-teacher/:id", cors(corsOptions), deleteTeacherControl);
// student
router.post("/create-student", cors(corsOptions), createPostControl);
router.get("/students-info", cors(corsOptions), getPostsControl);
router.patch("/update-student/:id", cors(corsOptions), updateStudentControl);
router.delete("/delete-student/:id", cors(corsOptions), deleteStudentControl);
export default router;
