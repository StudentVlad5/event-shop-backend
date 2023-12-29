const express = require("express");
const { categories } = require("../../controllers");
const ctrlWrapper = require("../../middleWares/ctrlWrapper");

const {  createCategory, get } = categories;
const router = express.Router();

router.post("/", ctrlWrapper(createCategory));
router.get("/", ctrlWrapper(get));

module.exports = routerCategories = router;
