const express = require ("express");
const {
  getAllEvents,
   getParticipantsByEventId,
} = require("../controllers/eventsControllers");

const {
  validateBody,
  isValidId,
} = require("../helpers");


const eventsRouter = express.Router();

eventsRouter.get("/", getAllEvents);

eventsRouter.get("/:id",  getParticipantsByEventId);



module.exports =  eventsRouter;