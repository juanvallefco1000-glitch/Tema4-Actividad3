const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const taskRoutes = require("./routes/task.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    ok: true,
    message: "Back-End funcionando correctamente"
  });
});

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    status: "ok",
    database: "MongoDB"
  });
});

app.use("/tasks", taskRoutes);

module.exports = app;