const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "GET all roadmap status" });
});

router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single roadmap status" });
});

router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a roadmap status" });
});


router 

module.exports = router;
