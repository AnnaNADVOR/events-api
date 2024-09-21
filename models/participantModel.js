const { mongoose } = require("mongoose");
const { Schema } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const emailRegexp = /^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;

const participantSchema = new Schema(
  {
    eventId: {
      type: String,
      required: [true, "Event ID is required"],
    },
    userFullName: {
      type: String,
      required: [true, "Full name is required"],
    },
    userEmail: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
    },
    userBirthDate: {
      type: Date,
      required: [true, "Birth date is required"],
    },
    infoSource: {
      type: String,
      required: [true, "Selecting a source of information is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

participantSchema.post("save", handleMongooseError);

const Participant = mongoose.model("Participant", participantSchema);

const addParticipantSchema = Joi.object({
  eventId: Joi.string().required(),
  userFullName: Joi.string().required(),
  userEmail: Joi.string().email().required(),
  userBirthDate: Joi.date().required(),
  infoSource: Joi.string().required(),
});

module.exports = {
  Participant,
  addParticipantSchema,
};
