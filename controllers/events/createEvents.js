const { ValidationError, dataFilterObj } = require("../../helpers");
const { Events } = require("../../models");
let path = require("path");

const createEvent = async (req, res, next) => {
  // const newData = dataFilterObj(req.body);
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

  const newData = {
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
    },
  };
  console.log("req.file?.path", req.file?.path);
  if (req.file?.path) {
    newData["en"].image = path.basename(req.file?.path);
    newData["ua"].image = path.basename(req.file?.path);
    newData["de"].image = path.basename(req.file?.path);
  } else {
    newData["en"].image = path.basename("");
    newData["ua"].image = path.basename("");
    newData["de"].image = path.basename("");
  }

  console.log("CREATE EVENT:", newData);

  try {
    const resCreate = await Events.create(newData);
    return res.status(201).json(resCreate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = createEvent;
