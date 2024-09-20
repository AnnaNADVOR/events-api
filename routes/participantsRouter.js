const express = require("express");
// const {
//     validateBody,
//     authenticate,
//     upload,
// } = require("../middlewares");

// const { schemas } = require("../models/userModel");
const {
  createParticipant,   
} = require("../controllers/participantsControllers");

const participantsRouter = express.Router();

participantsRouter.post("/", createParticipant);

module.exports = participantsRouter; 

