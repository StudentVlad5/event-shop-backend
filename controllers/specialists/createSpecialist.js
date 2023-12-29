const { ValidationError } = require("../../helpers");
const { Specialists } = require("../../models");

const createSpecialist = async (req, res, next) => {
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

  const newData = {
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
  console.log("CREATE Specialist:", newData);
  try {
    const resCreate = await Specialists.create(newData);
    return res.status(201).json(resCreate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = createSpecialist;
