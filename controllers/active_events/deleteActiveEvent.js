const { ActiveEvents } = require('../../models');

const deleteActiveEvent = async (req, res, next) => {
  try {
    const { params } = req;
    const _id = params.id;

    const events = await ActiveEvents.deleteOne({ _id });
    if (events.deletedCount === 0) {
      return res.status(400).json({ message: `Bad request (id incorrect)` });
    }
    res.json({ message: 'Success deleted' });
  } catch (error) {
    res.status(400).json({ message: `Bad request (id incorrect)` });
  }
};

module.exports = deleteActiveEvent;
