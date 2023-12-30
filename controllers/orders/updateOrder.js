const { ValidationError, dataFilterObj } = require('../../helpers');
const { Orders } = require('../../models');
// let path = require('path');

const updateOrder = async (req, res, next) => {
  const { id } = req.params;
  const {
    eventId,
    activeEventId,
    date,
    time,
    userId,
    userName,
    userEmail,
    userPhone,
    bookingSeats,
    priceTotal,
    status,
  } = req.body;

  const updatedData = {
    eventId,
    activeEventId,
    date,
    time,
    userId,
    userName,
    userEmail,
    userPhone,
    bookingSeats,
    priceTotal,
    status,
  };

  console.log('UPDATE ORDER', updatedData);

  try {
    const resUpdate = await Orders.findByIdAndUpdate(
      { _id: id },
      updatedData,
      {
        new: true,
      }
    );
    const newResponse = dataFilterObj(resUpdate);
    return res.status(201).json(newResponse._doc);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = updateOrder;
