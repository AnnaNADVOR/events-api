const express = require("express");

const {
  createParticipant,
  getParticipantsByEventId,   
} = require("../controllers/participantsControllers");

const { validateBody } = require('../middlewares');
const { addParticipantSchema } = require('../models/participantModel');

const participantsRouter = express.Router();

participantsRouter.post("/", validateBody(addParticipantSchema), createParticipant);

participantsRouter.get("/", getParticipantsByEventId)

module.exports = participantsRouter; 

