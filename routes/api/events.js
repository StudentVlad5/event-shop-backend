const express = require('express');
const { events } = require('../../controllers');
const ctrlWrapper = require('../../middleWares/ctrlWrapper');

const router = express.Router();

router.get('/', ctrlWrapper(events.getEvents));
router.get('/:id/', ctrlWrapper(events.getById));

module.exports = routerEvents = router;
