const { ValidationError } = require('../../helpers');
const { ActiveEvents } = require('../../models');

const geActiveEvents = async (req, res, next) => {
  try {
    const services = await ActiveEvents.find().sort({ createdAt: -1 });
    res.status(200).json(services);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};
module.exports = geActiveEvents;
