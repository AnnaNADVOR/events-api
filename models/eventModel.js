const { mongoose } = require("mongoose");
const { Schema } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

eventSchema.post("save", handleMongooseError);

const Event = mongoose.model("Event", eventSchema);

module.exports = {
  Event,
};
