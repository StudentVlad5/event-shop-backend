const { ValidationError } = require('../../helpers');
const { Packages } = require('../../models');

const getPackageById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const packages = await Packages.findById({ _id: id });
    res.status(200).json(packages);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = getPackageById;
