const express = require('express');
const { specialists } = require('../../controllers');
const { ctrlWrapper, upload, uploadCloud } = require('../../middleWares');

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
// router.patch('/:id', upload.single('avatar'), ctrlWrapper(updateSpecialistImg));
router.patch(
  '/:id',
  uploadCloud.single('avatar'),
  ctrlWrapper(updateSpecialistImg)
);
router.delete('/:id', ctrlWrapper(deleteSpecialist));
router.get('/', ctrlWrapper(get));
router.get('/:id', ctrlWrapper(getSpecialistById));

module.exports = routerSpecialists = router;
