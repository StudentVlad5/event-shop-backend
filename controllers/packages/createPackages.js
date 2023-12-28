const { ValidationError } = require("../../helpers");
const { Packages } = require("../../models");

const createPackages = async (req, res, next) => {
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

  const newData = {
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
  console.log("CREATE Package:", newData);
  try {
    const resCreate = await Packages.create(newData);
    return res.status(201).json(resCreate);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = createPackages;
