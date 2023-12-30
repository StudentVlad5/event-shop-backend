const { ValidationError, dataFilterObj } = require("../../helpers");
const { Events } = require("../../models");
let path = require("path");

const updateEvent = async (req, res, next) => {
  const { id } = req.params;
  const {
    image,
    date,
    time,
    nameFr,
    descriptionFr,
    nameUa,
    descriptionUa,
    nameRu,
    descriptionRu,
    article_event,
    specialistId,
    duration,
    category,
    rating
  } = req.body;

  const updatedData = {
    fr: {
      nameFr,
      descriptionFr,
    },
    ua: {
      nameUa,
      descriptionUa,
    },
    ru: {
      nameRu,
      descriptionRu,
    },
    image,
    date,
    time,
    article_event,
    specialistId,
    duration,
    category,
    rating
  };

  const event = await Events.findById({ _id: id });

  try {
    const resUpdate = await Events.findByIdAndUpdate({ _id: id }, updatedData, {
      new: true,
    });
    const newResponse = dataFilterObj(resUpdate);
    return res.status(201).json(newResponse._doc);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = updateEvent;
