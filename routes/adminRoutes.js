import cors from "cors";
import express from "express";
const router = express.Router();
import {
  signin,
  signupTeacher,
  getAdminInfo,
  createPost,
  getPosts,
  getTeacherInfo,
  updateAdminControls,
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
router.post("/admin-signin", cors(corsOptions), signin);
router.get("/admin-info", cors(corsOptions), getAdminInfo);
router.patch("/update-admin/:id", cors(corsOptions), updateAdminControls);

// teacher
router.post("/teacher-signup", cors(corsOptions), signupTeacher);
router.get("/teachers-info", cors(corsOptions), getTeacherInfo);
router.patch("/update-teacher/:id", cors(corsOptions));
router.delete("/delete-teacher/:id", cors(corsOptions));
// student
router.post("/create-student", cors(corsOptions), createPost);
router.get("/students-info", cors(corsOptions), getPosts);
router.patch("/update-student/:id", cors(corsOptions));
router.delete("/delete-student/:id", cors(corsOptions));
export default router;
