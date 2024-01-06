const { ValidationError } = require('../../helpers');
const { Specialists } = require('../../models');

const getspecialistById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const specialistById = await Specialists.findById({ specialistId: id });
    res.status(200).json(specialistById);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = getspecialistById;
