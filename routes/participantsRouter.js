const express = require("express");

const {
  createParticipant,
  getParticipantsByEventId,   
} = require("../controllers/participantsControllers");

const participantsRouter = express.Router();

participantsRouter.post("/", createParticipant);

participantsRouter.get("/", getParticipantsByEventId)

module.exports = participantsRouter; 

