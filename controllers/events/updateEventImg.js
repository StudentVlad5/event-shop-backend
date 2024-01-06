const { ValidationError, dataFilterObj } = require("../../helpers");
const { Events } = require("../../models");
let path = require("path");

const updateEventImg = async (req, res, next) => {
  const { id } = req.params;
  const perem = req.body?.name;

    const updatedData = {
      [perem]: "",
    };

    req.file?.path
      ? (updatedData[perem] = path.basename(req.file?.path))
      : (updatedData[perem] = path.basename(""));

  console.log("UPDATE updatedData", updatedData);

  try {
    const resUpdate = await Events.findOneAndUpdate(
      { article_event: id },
      updatedData,
      {
        new: true,
      }
    );
    const events = await Events.find();
    return res.status(201).json(events);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = updateEventImg;
