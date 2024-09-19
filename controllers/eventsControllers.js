const {
    HttpError,
    controllerWrapper,
} = require("../helpers");

const { Event } = require("../models/eventModel");

const getAllEvents = async (_, res) => {
    const result = await Event.find();
    res.json(result);      
};

const getEventById = async (req, res) => {
    const { id } = req.params;
    const result = await Event.findById(id);
    if (!result) {
        throw HttpError(404, "Not found");     
    }
    res.json(result);    
};


module.exports = {
    getAllEvents: controllerWrapper(getAllEvents),
    getEventById: controllerWrapper(getEventById),   
}