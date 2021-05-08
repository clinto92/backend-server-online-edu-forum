import express from "express";

import { updatePost, likePost, deletePost } from "../controllers/posts.js";

const router = express.Router();
import auth from "../middleware/auth.js";

// working routes above

router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);

export default router;
