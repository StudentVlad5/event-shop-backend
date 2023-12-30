const express = require("express");
const { orders } = require("../../controllers");
const ctrlWrapper = require("../../middleWares/ctrlWrapper");

const { createOrder, get } = orders;
const router = express.Router();

router.post("/", ctrlWrapper(createOrder));
router.get("/", ctrlWrapper(get));

module.exports = routerOrders = router;
