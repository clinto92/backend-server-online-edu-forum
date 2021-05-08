import express from "express";
const router = express.Router();
import {
  signin,
  signupTeacher,
  getAdminInfo,
  createPost,
  getPosts,
  getTeacherInfo,
} from "../controllers/adminControl.js";

// import auth from "../middleware/auth.js";
// admin
router.post("/admin-signin", signin);
router.get("/admin-info", getAdminInfo);
router.patch("/update-admin/:id");
// teacher
router.post("/teacher-signup", signupTeacher);
router.get("/teachers-info", getTeacherInfo);
router.patch("/update-teacher/:id");
router.delete("/delete-teacher/:id");
// student
router.post("/create-student", createPost);
router.get("/students-info", getPosts);
router.patch("/update-student/:id");
router.delete("/delete-student/:id");
export default router;
