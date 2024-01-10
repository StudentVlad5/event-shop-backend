const express = require('express');
const { specialists } = require('../../controllers');
const ctrlWrapper = require('../../middleWares/ctrlWrapper');
const { upload } = require('../../middleWares');

const {
  createSpecialist,
  get,
  getSpecialistById,
  updateSpecialistImg,
  deleteSpecialist,
  updateSpecialist,
} = specialists;
const router = express.Router();

router.post('/', ctrlWrapper(createSpecialist));
router.post('/:id', ctrlWrapper(updateSpecialist));
router.patch('/:id', upload.single('avatar'), ctrlWrapper(updateSpecialistImg));
router.delete('/:id', ctrlWrapper(deleteSpecialist));
router.get('/', ctrlWrapper(get));
router.get('/:id', ctrlWrapper(getSpecialistById));

module.exports = routerSpecialists = router;
