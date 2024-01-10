const express = require('express');
const { messages } = require('../../controllers');
const ctrlWrapper = require('../../middleWares/ctrlWrapper');

const { createMessage, getMessages, deleteMessage } = messages;
const router = express.Router();

router.post('/', ctrlWrapper(createMessage));
router.get('/', ctrlWrapper(getMessages));
router.delete('/:id', ctrlWrapper(deleteMessage));

module.exports = routerMessages = router;
