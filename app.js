const express = require ("express");
const morgan = require ("morgan");
const cors = require("cors");
const eventsRouter = require ("./routes/eventsRouter.js");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/events", eventsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;