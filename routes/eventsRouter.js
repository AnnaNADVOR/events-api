const express = require("express");
const { getAllEvents, getEventById } = require("../controllers/eventsControllers");

const eventsRouter = express.Router();

eventsRouter.get("/", getAllEvents);
eventsRouter.get("/:id", getEventById)

module.exports = eventsRouter;
