const User = require("../models/User");
const Course = require("../models/Course");

const getRecommendations = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const keywords = [
      ...(user.skills || []),
      ...(user.interests || []),
    ];

    const courses = await Course.find({
      tags: {
        $in: keywords,
      },
    });

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getRecommendations,
};