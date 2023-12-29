const { ValidationError, dataFilterObj } = require('../../helpers');
const { Specialists } = require('../../models');
// let path = require('path');

const updateSpecialist = async (req, res, next) => {
  const { id } = req.params;
  const {
    rating,
    image,
    status,
    phone,
    email,
    descriptionFr,
    nameFr,
    descriptionUa,
    nameUa,
    descriptionRu,
    nameRu,
  } = req.body;

  const updatedData = {
    fr: {
      description: descriptionFr,
      name: nameFr,
    },
    ua: {
      description: descriptionUa,
      name: nameUa,
    },
    ru: {
      description: descriptionRu,
      name: nameRu,
    },
    rating,
    image,
    status,
    phone,
    email,
  };

  console.log('UPDATE SPECIALIST', updatedData);

  try {
    const resUpdate = await Specialists.findByIdAndUpdate(
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

module.exports = updateSpecialist;
