const express = require("express");

const router = express.Router();

const {
  createCourse,
  getCourses,
} = require("../controllers/courseController");

const protect = require("../middleware/authMiddleware");

// CREATE COURSE
router.post("/", protect, createCourse);

// GET COURSES
router.get("/", getCourses);

module.exports = router;