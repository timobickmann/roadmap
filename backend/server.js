const express = require("express");
const roadmapStatusRoutes = require("./routes/roadmapStatus");
const userRoutes = require("./routes/user");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/roadmap-status", roadmapStatusRoutes);
app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log("connected to db & listening on port", process.env.PORT)
    );
  })
  .catch((error) => {
    console.log(error);
  });
