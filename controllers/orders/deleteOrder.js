const { Orders } = require('../../models');

const deleteOrder = async (req, res, next) => {
  try {
    const { params } = req;
    const _id = params.id;

    const order = await Orders.deleteOne({ _id });
    if (order.deletedCount === 0) {
      return res.status(400).json({ message: `Bad request (id incorrect)` });
    }
    res.json({ message: 'Success deleted' });
  } catch (error) {
    res.status(400).json({ message: `Bad request (id incorrect)` });
  }
};

module.exports = deleteOrder;
