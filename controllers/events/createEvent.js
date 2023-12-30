const { ValidationError, dataFilterObj } = require("../../helpers");
const { Events } = require("../../models");
let path = require("path");

const createEvent = async (req, res, next) => {
  // const newData = dataFilterObj(req.body);
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

  const newData = {
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

  console.log("CREATE EVENT:", newData);

  try {
    const resCreate = await Events.create(newData);
    return res.status(201).json(resCreate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = createEvent;
