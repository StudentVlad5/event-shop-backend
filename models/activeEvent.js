const Joi = require('joi');
const mongoose = require('mongoose');
require('mongoose-type-url');

const activeEventsValidationSchema = Joi.object({
  article_event: Joi.string().min(1).max(32).required(),
  date: Joi.date().required(),
  time: Joi.string().required(),
  language: Joi.string().required(),
  seats: Joi.number().min(1).max(3000).required(),
  booking: Joi.number().min(1).max(3000).required(),
  vacancies: Joi.number().min(1).max(3000).required(),
  locationFr: Joi.string().min(1).max(32).required(),
  adressFr: Joi.string().min(1).max(132).required(),
  locationUa: Joi.string().min(1).max(32).required(),
  adressUa: Joi.string().min(1).max(132).required(),
  locationRu: Joi.string().min(1).max(32).required(),
  adressRu: Joi.string().min(1).max(132).required(),
});

const ActiveEventsSchema = new mongoose.Schema(
  {
    fr: {
      location: {
        type: String,
        required: [true, 'Set location'],
      },
      adress: {
        type: String,
        required: [true, 'Set adress'],
      },
    },
    ua: {
      location: {
        type: String,
        required: [true, 'Set location'],
      },
      adress: {
        type: String,
        required: [true, 'Set adress'],
      },
    },
    ru: {
      location: {
        type: String,
        required: [true, 'Set location'],
      },
      adress: {
        type: String,
        required: [true, 'Set adress'],
      },
    },
    article_event: { 
      type: String,
      required: [true, "Set article_even"],
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
    language: { 
      type: String,
      required: [true, "Set vacancies"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const ActiveEvents = mongoose.model('activeEvents', ActiveEventsSchema);

module.exports = { ActiveEvents, activeEventsValidationSchema };
