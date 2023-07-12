const express = require("express");
const RoadmapStatus = require("../models/roadmapStatusModel");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "GET all roadmap status" });
});

router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single roadmap status" });
});

router.post("/", async (req, res) => {
  const { name, status } = req.body;

  try {
    const roadmapStatus = await RoadmapStatus.create({ name, status });
    res.status(200).json(roadmapStatus);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a roadmap status" });
});

module.exports = router;
