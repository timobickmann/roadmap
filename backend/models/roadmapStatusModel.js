const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roadmapStatusSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("RoadmapStatus", roadmapStatusSchema);
