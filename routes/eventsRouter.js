const express = require("express");
const { getAllEvents, getEventById } = require("../controllers/eventsControllers");
const {isValidId} = require("../middlewares")

const eventsRouter = express.Router();

eventsRouter.get("/", getAllEvents);
eventsRouter.get("/:id", isValidId, getEventById)

module.exports = eventsRouter;
