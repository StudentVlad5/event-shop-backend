const express = require("express");
const { packages } = require("../../controllers");
const ctrlWrapper = require("../../middleWares/ctrlWrapper");

const {  createPackages, get } = packages;
const router = express.Router();

router.post("/", ctrlWrapper(createPackages));
router.get("/", ctrlWrapper(get));

module.exports = routerPackages = router;
