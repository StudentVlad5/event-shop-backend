const Joi = require("joi");
const mongoose = require("mongoose");
require("mongoose-type-email");
require("mongoose-type-url");

const packagesValidationSchema = Joi.object({
  titleEn: Joi.string().min(3).max(32).required(),
  priceEn: Joi.string().min(3).max(32).required(),
  contentEn: Joi.string().min(1).max(999).required(),
  featuresEn: Joi.string(),
  titleUa: Joi.string().min(3).max(32).required(),
  priceUa: Joi.string().min(3).max(32).required(),
  contentUa: Joi.string().min(1).max(999).required(),
  featuresUa: Joi.string(),
  titleDe: Joi.string().min(3).max(32).required(),
  priceDe: Joi.string().min(3).max(32).required(),
  contentDe: Joi.string().min(1).max(999).required(),
  featuresDe: Joi.string(),
});

const packagesSchema = new mongoose.Schema(
  {
    en: {
      title: {
        type: String,
        required: [true, "Set title of the package"],
      },
      price: {
        type: String,
        required: [true, "Set price of the package"],
      },
      content: {
        type: String,
        required: [true, "Set content of the the package"],
      },
      features: {
        type: Array,
        default: [],
      },
    },
    ua: {
      title: {
        type: String,
        required: [true, "Set title of the package"],
      },
      price: {
        type: String,
        required: [true, "Set price of the package"],
      },
      content: {
        type: String,
        required: [true, "Set content of the the package"],
      },
      features: {
        type: Array,
        default: [],
      },
    },
    de: {
      title: {
        type: String,
        required: [true, "Set title of the package"],
      },
      price: {
        type: String,
        required: [true, "Set price of the package"],
      },
      content: {
        type: String,
        required: [true, "Set content of the the package"],
      },
      features: {
        type: Array,
        default: [],
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Packages = mongoose.model("packages", packagesSchema);

module.exports = { Packages, packagesValidationSchema };
