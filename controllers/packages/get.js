const { ValidationError } = require("../../helpers");
const { Packages } = require("../../models");

const get = async (req, res, next) => {
  try {
    const packages = await Packages.find();
    res.status(200).json(packages);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = get;
