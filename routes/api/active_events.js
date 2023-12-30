const express = require('express');
const { active_events } = require('../../controllers');
const ctrlWrapper = require('../../middleWares/ctrlWrapper');

const router = express.Router();
const { getByIdActiveEvent, geActiveEvents } = active_events;

router.get('/', ctrlWrapper(geActiveEvents));
router.get('/:id/', ctrlWrapper(getByIdActiveEvent));

module.exports = routerActiveEvents = router;
