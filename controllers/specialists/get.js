const { ValidationError } = require('../../helpers');
const { Specialists } = require('../../models');

const get = async (req, res, next) => {
  const { sort } = req.query;
  let specialists = [];

  try {
    if (sort) {
      if (sort === 'rating')
        specialists = await Specialists.find().sort({
          rating: -1,
        });
    } else {
      const specialists = await Specialists.find().sort({
        nameUa: 1,
        nameFr: 1,
        nameRu: 1,
      });
    }

    res.status(200).json(specialists);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = get;
