const {
    HttpError,
    controllerWrapper,
} = require("../helpers");

const { Participant } = require('../models/participantModel');

const createParticipant = async (req, res) => {
    const { eventId, userEmail } = req.body;
    const participant = await Participant.exists({ eventId, userEmail});
    if (participant) {
        throw HttpError(409, 'Such a member is already registered');
    }
    const result = await Participant.create({ ...req.body });
    res.status(201).json(result)
}


const getParticipantsByEventId = async (req, res) => {
    const { eventId } = req.query;
    const result = await Participant.find({ eventId });
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

module.exports = {  
    createParticipant: controllerWrapper(createParticipant),   
    getParticipantsByEventId: controllerWrapper(getParticipantsByEventId),  
}
