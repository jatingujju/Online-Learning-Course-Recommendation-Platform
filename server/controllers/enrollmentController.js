const Enrollment = require("../models/Enrollment");
const Course = require("../models/Course");

const enrollCourse = async (req, res) => {
  try {
    const { userId, courseId } = req.body;

    const alreadyEnrolled = await Enrollment.findOne({
      user: userId,
      course: courseId,
    });

    if (alreadyEnrolled) {
      return res.status(400).json({
        message: "Already enrolled in this course",
      });
    }

    const enrollment = await Enrollment.create({
      user: userId,
      course: courseId,
    });

    res.status(201).json({
      message: "Course enrolled successfully",
      enrollment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getUserEnrollments = async (req, res) => {
  try {
    const { userId } = req.params;

    const enrollments = await Enrollment.find({
      user: userId,
    }).populate("course");

    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  enrollCourse,
  getUserEnrollments,
};