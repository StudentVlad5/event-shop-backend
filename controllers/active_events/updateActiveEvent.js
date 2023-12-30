const { ValidationError, dataFilterObj } = require("../../helpers");
const { ActiveEvents } = require("../../models");
let path = require("path");

const updateActiveEvent = async (req, res, next) => {
  const { id } = req.params;
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

  const updatedData = {
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

  // const event = await ActiveEvents.findById({ _id: id });

  // if (req.file?.path) {
  //   updatedData["en"].image = path.basename(req.file?.path);
  //   updatedData["ua"].image = path.basename(req.file?.path);
  //   updatedData["de"].image = path.basename(req.file?.path);
  // } else {
  //   updatedData["en"].image = event["en"].image;
  //   updatedData["ua"].image = event["en"].image;
  //   updatedData["de"].image = event["en"].image;
  // }

  try {
    const resUpdate = await ActiveEvents.findByIdAndUpdate({ _id: id }, updatedData, {
      new: true,
    });
    const newResponse = dataFilterObj(resUpdate);
    return res.status(201).json(newResponse._doc);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = updateActiveEvent;
