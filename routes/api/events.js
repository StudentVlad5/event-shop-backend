const express = require('express');
const { events } = require('../../controllers');
const { ctrlWrapper, uploadEvent, uploadCloud } = require('../../middleWares');

const router = express.Router();

router.get('/', ctrlWrapper(events.getEvents));
router.post('/', ctrlWrapper(events.createEvent));
router.post('/:id', ctrlWrapper(events.updateEvent));
// router.patch("/:id", uploadEvent.single("avatar"), ctrlWrapper(events.updateEventImg));
router.patch(
  '/:id',
  uploadCloud.fields([
    { name: 'image', maxCount: 1 },
    { name: 'image_1', maxCount: 1 },
    { name: 'image_2', maxCount: 1 },
  ]),
  ctrlWrapper(events.updateEventImg)
);
router.delete('/:id', ctrlWrapper(events.deleteEvent));
router.get('/:id/', ctrlWrapper(events.getById));

module.exports = routerEvents = router;
