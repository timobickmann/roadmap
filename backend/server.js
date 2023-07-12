const express = require("express");
const roadmapStatusRoutes = require("./routes/roadmap-status")
require("dotenv").config();


const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/roadmap-status", roadmapStatusRoutes)

app.listen(process.env.PORT, () =>
  console.log("listening on port", process.env.PORT)
);
