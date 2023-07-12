const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roadmapStatusSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("RoadmapStatus", roadmapStatusSchema)

