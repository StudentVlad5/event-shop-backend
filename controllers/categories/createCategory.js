const { ValidationError } = require("../../helpers");
const { Categories } = require("../../models");

const createCategory = async (req, res, next) => {
  const {
    titleFr,
    titleUa,
    titleRu,
  } = req.body;

  const newData = {
    fr: {
      title: titleFr,
    },
    ua: {
      title: titleUa,
    },
    ru: {
      title: titleRu,
    },
  };
  console.log("CREATE Category:", newData);
  try {
    const resCreate = await Categories.create(newData);
    return res.status(201).json(resCreate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = createCategory;
