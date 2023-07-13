const express = require("express");
const {
  createRoadmapStatus,
  getRoadmapStatus,
  getAllRoadmapStatus,
  updateRoadmapStatus,
} = require("../controllers/roadmapStatusController");
const router = express.Router();

router.get("/", getAllRoadmapStatus);

router.get("/:id", getRoadmapStatus);

router.post("/", createRoadmapStatus);

router.patch("/:id", updateRoadmapStatus);

module.exports = router;
