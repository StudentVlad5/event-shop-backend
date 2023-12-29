const { ValidationError, dataFilterObj } = require('../../helpers');
const { Categories } = require('../../models');
// let path = require('path');

const updateCategory = async (req, res, next) => {
  const { id } = req.params;
  const {
    titleFr,
    titleUa,
    titleRu,
  } = req.body;

  const updatedData = {
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

  console.log('UPDATE CATEGORY', updatedData);

  try {
    const resUpdate = await Categories.findByIdAndUpdate(
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

module.exports = updateCategory;
