const express = require("express");

const router = express.Router();

const {
  enrollCourse,
  getUserEnrollments,
} = require("../controllers/enrollmentController");

const protect = require("../middleware/authMiddleware");

// ENROLL COURSE
router.post("/", protect, enrollCourse);

// GET USER ENROLLMENTS
router.get("/:userId", protect, getUserEnrollments);

module.exports = router;