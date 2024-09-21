const { HttpError, controllerWrapper } = require("../helpers");

const { Event } = require("../models/eventModel");

const getAllEvents = async (req, res) => {
    const { limit, page, sortBy, order } = req.query;

    const sortObject = {}

    if (sortBy) {
        sortObject[sortBy] = convertOrder(order)
    }

    const skip = (page - 1) * limit; 
    const result = await Event.find().limit(limit).skip(skip).sort(sortObject);
    const total = await Event.countDocuments({});
    res.json({ result, total });
};

function convertOrder(order) {
    switch (order) {
        case "ask":
            return 1
        case "desc":
            return -1
        default:
            return 1
    }
}

const getEventById = async (req, res) => {
    const { id } = req.params;
    const result = await Event.findById( id );
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
}

module.exports = {
    getAllEvents: controllerWrapper(getAllEvents),
    getEventById: controllerWrapper(getEventById),
};


