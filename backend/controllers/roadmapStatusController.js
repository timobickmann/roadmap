const RoadmapStatus = require("../models/roadmapStatusModel");
const mongoose = require("mongoose");

// GET ALL
const getAllRoadmapStatus = async (req, res) => {
  const allRoadmapStatus = await RoadmapStatus.find({});

  res.status(200).json(allRoadmapStatus);
};

// GET ONE
const getRoadmapStatus = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Roadmap Item" });
  }

  const roadmapStatus = await RoadmapStatus.findById(id);

  if (!roadmapStatus) {
    return res.status(400).json({ error: "No such Roadmap Item" });
  }

  res.status(200).json(roadmapStatus);
};

// CREATE NEW
const createRoadmapStatus = async (req, res) => {
  const { name, status } = req.body;

  try {
    const roadmapStatus = await RoadmapStatus.create({ name, status });
    res.status(200).json(roadmapStatus);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// UPDATE
const updateRoadmapStatus = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Roadmap Item" });
  }

  const roadmapStatus = await RoadmapStatus.findOneAndUpdate(
    { _id: id },
    { ...req.body },
    { new: true }
  );

  if (!roadmapStatus) {
    return res.status(400).json({ error: "No such Roadmap Item" });
  }

  res.status(200).json(roadmapStatus);
};

module.exports = {
  createRoadmapStatus,
  getRoadmapStatus,
  getAllRoadmapStatus,
  updateRoadmapStatus,
};
