const { ValidationError, dataFilterObj } = require("../../helpers");
const { Events } = require("../../models");
let path = require("path");

const updateEvent = async (req, res, next) => {
  const { id } = req.params;
  const {
    image,
    date,
    time,

    durationEn,
    locationEn,
    titleEn,
    descriptionEn,
    planEn,
    speakersEn,
    moderatorEn,
    packagesEn,

    durationUa,
    locationUa,
    titleUa,
    descriptionUa,
    planUa,
    speakersUa,
    moderatorUa,
    packagesUa,

    durationDe,
    locationDe,
    titleDe,
    descriptionDe,
    planDe,
    speakersDe,
    moderatorDe,
    packagesDe,
  } = req.body;

  const updatedData = {
    en: {
      date: date,
      time: time,
      duration: durationEn,
      location: locationEn,
      title: titleEn,
      description: descriptionEn,
      plan: planEn,
      speakers: speakersEn,
      moderator: moderatorEn,
      packages: packagesEn,
      image: image,
    },
    ua: {
      date: date,
      time: time,
      duration: durationUa,
      location: locationUa,
      title: titleUa,
      description: descriptionUa,
      plan: planUa,
      speakers: speakersUa,
      moderator: moderatorUa,
      packages: packagesUa,
      image: image,
    },
    de: {
      date: date,
      time: time,
      duration: durationDe,
      location: locationDe,
      title: titleDe,
      description: descriptionDe,
      plan: planDe,
      speakers: speakersDe,
      moderator: moderatorDe,
      packages: packagesDe,
      image: image,
    },
  };

  const event = await Events.findById({ _id: id });

  if (req.file?.path) {
    updatedData["en"].image = path.basename(req.file?.path);
    updatedData["ua"].image = path.basename(req.file?.path);
    updatedData["de"].image = path.basename(req.file?.path);
  } else {
    updatedData["en"].image = event["en"].image;
    updatedData["ua"].image = event["en"].image;
    updatedData["de"].image = event["en"].image;
  }

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
