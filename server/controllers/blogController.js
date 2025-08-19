import fs from "fs";
import imagekit from "../config/imagekit.js";
import Blog from "../models/blog.js";
import mongoose from "mongoose";
import Comment from "../models/comment.js";

export const addBlog = async (req, res) => {
  try {
    if (!req.body.blog) {
      return res
        .status(400)
        .json({ success: false, message: "Blog data is required" });
    }

    let blogData;
    try {
      blogData = JSON.parse(req.body.blog);
    } catch (err) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid blog data format" });
    }

    const { title, subTitle, description, category, isPublished } = blogData;
    const imageFile = req.file;

    // Validate required fields
    if (!title || !description || !category || !imageFile) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    // Optional: File validation
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(imageFile.mimetype)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid image format" });
    }

    // Read image buffer
    const fileBuffer = fs.readFileSync(imageFile.path);

    // Upload to ImageKit
    const uploadResponse = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blog",
    });

    // Optimise image URL
    const optimiseImageUrl = imagekit.url({
      path: uploadResponse.filePath,
      transformation: [
        { quality: "auto" },
        { format: "webp" },
        { width: "1280" },
      ],
    });

    // Save blog to DB with image
    await Blog.create({
      title,
      subTitle,
      description,
      category,
      isPublished,
      image: optimiseImageUrl,
    });

    return res
      .status(201)
      .json({ success: true, message: "Blog created successfully" });
  } catch (error) {
    console.error("Error adding blog:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true }).sort({
      createdAt: -1, // newest first
    });

    if (!blogs || blogs.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No blogs found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Blogs fetched successfully",
      blogs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if blogId is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid blog ID format",
      });
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "No blog found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Blog found",
      blog,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid blog ID format",
      });
    }

    const deleteBlog = await Blog.findByIdAndDelete(id);

    if (!deleteBlog) {
      return res.status(404).json({
        success: false,
        message: "No blog found with this ID",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
      deleteBlog, // optional: return deleted blog data
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const togglePublished = async (req, res) => {
  try {
    const { id } = req.body;

    // No ObjectId validation here because _id is String
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    blog.isPublished = !blog.isPublished;
    await blog.save();

    return res.status(200).json({
      success: true,
      message: `Blog is now ${blog.isPublished ? "Published" : "Unpublished"}`,
      blog,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const addComment = async (req, res) => {
  try {
    const { blog, name, content } = req.body;

    // Basic validation
    if (!blog || !name || !content) {
      return res.status(400).json({
        success: false,
        message: "Blog, name, and content are required",
      });
    }

    // (Optional) Check if blog exists
    const blogExists = await Blog.findById(blog);
    if (!blogExists) {
      return res.status(404).json({
        success: false,
        message: "Blog not found, cannot add comment",
      });
    }

    // Create comment
    const comment = await Comment.create({ blog, name, content });

    return res.status(201).json({
      success: true,
      message: "Comment added for review",
      comment, // returning it can help frontend immediately
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getBlogComments = async (req, res) => {
  try {
    // Get blogId from params (preferred way)
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Blog ID is required",
      });
    }

    // Fetch approved comments, newest first
    const comments = await Comment.find({
      blog: id,
      isApproved: true,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "Fetched comments successfully",
      comments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
