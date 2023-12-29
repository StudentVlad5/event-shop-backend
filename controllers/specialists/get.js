const { ValidationError } = require("../../helpers");
const { Specialists } = require("../../models");

const get = async (req, res, next) => {
  try {
    const specialists = await Specialists.find();
    res.status(200).json(specialists);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = get;
