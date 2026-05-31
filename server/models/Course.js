const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(

  {

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    instructor: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    tags: [
      {
        type: String,
      },
    ],

    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },

    duration: {
      type: String,
    },

    thumbnail: {
      type: String,
    },

  },

  {
    timestamps: true,
  }

);

module.exports = mongoose.model("Course", courseSchema);