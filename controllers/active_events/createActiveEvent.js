const { ValidationError, dataFilterObj } = require("../../helpers");
const { ActiveEvents } = require("../../models");
let path = require("path");

const createActiveEvent = async (req, res, next) => {
  // const newData = dataFilterObj(req.body);
  const {
    article_event,
    date,
    time,
    price,
    seats,
    booking,
    vacancies,
    language,
    locationFr,
    addressFr,
    locationUa,
    addressUa,
    locationRu,
    addressRu,
  } = req.body;

  const newData = {
    fr: {
      locationFr,
      addressFr,
    },
    ua: {
      locationUa,
      addressUa,
    },
    ru: {
      locationRu,
      addressRu,
    },
    article_event,
    date,
    time,
    price,
    seats,
    booking,
    vacancies,
    language,
  };

  console.log("CREATE ACTIVE EVENT:", newData);

  try {
    const resCreate = await ActiveEvents.create(newData);
    return res.status(201).json(resCreate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = createActiveEvent;
