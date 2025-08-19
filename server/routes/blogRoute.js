import express from "express";
import {
  addBlog,
  addComment,
  deleteBlog,
  getAllBlogs,
  getBlogById,
  togglePublished,
  getBlogComments
} from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single("image"), auth, addBlog);
blogRouter.get("/all", getAllBlogs);
blogRouter.get("/:blogId", getBlogById);
blogRouter.post("/delete", auth, deleteBlog);
blogRouter.post("/toggle-published", auth, togglePublished);
blogRouter.post('/add-comment', addComment);
blogRouter.get('/comments', getBlogComments)

export default blogRouter;
