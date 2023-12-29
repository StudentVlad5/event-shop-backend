const { Categories } = require('../../models');

const deleteCategory = async (req, res, next) => {
  try {
    const { params } = req;
    const _id = params.id;

    const category = await Categories.deleteOne({ _id });
    if (category.deletedCount === 0) {
      return res.status(400).json({ message: `Bad request (id incorrect)` });
    }
    res.json({ message: 'Success deleted' });
  } catch (error) {
    res.status(400).json({ message: `Bad request (id incorrect)` });
  }
};

module.exports = deleteCategory;
