const { ValidationError, dataFilterObj } = require("../../helpers");
const { ActiveEvents } = require("../../models");
let path = require("path");

const updateActiveEvent = async (req, res, next) => {
  const { id } = req.params;
  const {
    eventId,
    date,
    time,
    price,
    seats,
    booking,
    vacancies,
    language,
    language_secondary,
    locationFr,
    addressFr,
    locationUa,
    addressUa,
    locationRu,
    addressRu,
  } = req.body;

  const updatedData = {
    fr: {
      location: locationFr,
      address: addressFr,
    },
    ua: {
      location: locationUa,
      address: addressUa,
    },
    ru: {
      location: locationRu,
      address: addressRu,
    },
    article_eventID: id,
    eventId,
    date,
    time,
    price,
    seats,
    booking,
    vacancies,
    language,
    language_secondary,
  };
  try {
    const resUpdate = await ActiveEvents.findOneAndUpdate({ article_eventID: id }, updatedData, {
      new: true,
    });

    const services = await ActiveEvents.find().sort({ createdAt: -1 });
    return res.status(201).json(services);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = updateActiveEvent;
