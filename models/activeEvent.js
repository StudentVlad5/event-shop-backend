const Joi = require("joi");
const mongoose = require("mongoose");
require("mongoose-type-url");

const activeEventsValidationSchema = Joi.object({
  article_eventID: Joi.string().min(1).max(32).required(),
  eventId: Joi.string().min(1).max(32).required(),
  date: Joi.date().required(),
  time: Joi.string().required(),
  language: Joi.string().required(),
  language_secondary: Joi.string(),
  seats: Joi.number().min(1).max(5000).required(),
  booking: Joi.number().min(1).max(5000).required(),
  vacancies: Joi.number().min(1).max(5000).required(),
  price: Joi.number().min(1).max(300000).required(),
  locationFr: Joi.string().min(1).max(32).required(),
  addressFr: Joi.string().min(1).max(132),
  locationUa: Joi.string().min(1).max(32).required(),
  addressUa: Joi.string().min(1).max(132),
  locationRu: Joi.string().min(1).max(32).required(),
  addressRu: Joi.string().min(1).max(132),
});

const ActiveEventsSchema = new mongoose.Schema(
  {
    fr: {
      location: {
        type: String,
        required: [true, "Set location"],
      },
      address: {
        type: String,
        default: "",
      },
    },
    ua: {
      location: {
        type: String,
        required: [true, "Set location"],
      },
      address: {
        type: String,
        default: "",
      },
    },
    ru: {
      location: {
        type: String,
        default: "",
      },
      address: {
        type: String,
        required: [true, "Set address"],
      },
    },
    article_eventID: {
      type: String,
      required: [true, "Set article_evenID"],
    },
    eventId: {
      type: String,
      required: [true, "Set eventId"],
    },
    date: {
      type: Date,
      required: [true, "Set date"],
    },
    time: {
      type: String,
      required: [true, "Set time"],
    },
    seats: {
      type: Number,
      required: [true, "Set seats"],
    },
    booking: {
      type: Number,
      required: [true, "Set booking"],
    },
    vacancies: {
      type: Number,
      required: [true, "Set vacancies"],
    },
    price: {
      type: Number,
      required: [true, "Set price"],
    },
    language: {
      type: String,
      required: [true, "Set language"],
    },
    language_secondary: {
      type: String,
      default: "",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const ActiveEvents = mongoose.model("activeEvents", ActiveEventsSchema);

module.exports = { ActiveEvents, activeEventsValidationSchema };
