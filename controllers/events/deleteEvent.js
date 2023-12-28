const { Events } = require('../../models');

const deleteEvent = async (req, res, next) => {
  try {
    const { user, params } = req;
    const _id = params.id;

    const events = await Events.deleteOne({ _id });
    if (events.deletedCount === 0) {
      return res.status(400).json({ message: `Bad request (id incorrect)` });
    }
    res.json({ message: 'Success deleted' });
  } catch (error) {
    res.status(400).json({ message: `Bad request (id incorrect)` });
  }
};

module.exports = deleteEvent;
