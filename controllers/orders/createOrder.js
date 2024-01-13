const { ValidationError } = require("../../helpers");
const { Orders } = require("../../models");

const createOrder = async (req, res, next) => {
  const {
    eventId,
    activeEventID,
    date,
    time,
    userName,
    userEmail,
    bookingSeats,
    priceTotal,
    status,
  } = req.body;

  const newData = {
    eventId,
    activeEventID,
    date,
    time,
    userName,
    userEmail,
    bookingSeats,
    priceTotal,
    status: status ? status :"new",
  };
  console.log("CREATE OREDER:", newData);
  try {
    const resCreate = await Orders.create(newData);
    return res.status(201).json(resCreate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = createOrder;
