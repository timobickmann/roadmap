const express = require("express");
const {
  createRoadmapStatus,
  getRoadmapStatus,
  getAllRoadmapStatus,
  updateRoadmapStatus,
} = require("../controllers/roadmapStatusController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.use(requireAuth);

router.get("/", getAllRoadmapStatus);

router.get("/:id", getRoadmapStatus);

router.post("/", createRoadmapStatus);

router.patch("/:id", updateRoadmapStatus);

module.exports = router;
