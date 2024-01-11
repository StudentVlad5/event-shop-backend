const Joi = require('joi');
const mongoose = require('mongoose');
require('mongoose-type-email');

const messagesValidationSchema = Joi.object({
  name: Joi.string().min(1).max(32).required(),
  email: Joi.string().email().required(),
  message: Joi.string().required(),
});

const messagesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name'],
    },
    email: {
      type: mongoose.SchemaTypes.Email,
      required: [true, 'Set email'],
    },
    message: {
      type: String,
      required: [true, 'Set message'],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Messages = mongoose.model('messages', messagesSchema);

module.exports = { Messages, messagesValidationSchema };
