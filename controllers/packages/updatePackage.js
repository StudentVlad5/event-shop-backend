const { ValidationError, dataFilterObj } = require('../../helpers');
const { Packages } = require('../../models');
let path = require('path');

const updatePackage = async (req, res, next) => {
  const { id } = req.params;
  const {
    titleEn,
    priceEn,
    contentEn,
    featuresEn,
    titleUa,
    priceUa,
    contentUa,
    featuresUa,
    titleDe,
    priceDe,
    contentDe,
    featuresDe,
  } = req.body;
  const updatedData = {
    en: {
      title: titleEn,
      price: priceEn,
      content: contentEn,
      features: featuresEn.toString().split(','),
    },
    ua: {
      title: titleUa,
      price: priceUa,
      content: contentUa,
      features: featuresUa.toString().split(','),
    },
    de: {
      title: titleDe,
      price: priceDe,
      content: contentDe,
      features: featuresDe.toString().split(','),
    },
  };

  console.log('UPDATE PACKAGES', updatedData);

  try {
    const resUpdate = await Packages.findByIdAndUpdate(
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

module.exports = updatePackage;
