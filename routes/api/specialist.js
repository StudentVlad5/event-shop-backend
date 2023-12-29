const express = require("express");
const { specialists } = require("../../controllers");
const ctrlWrapper = require("../../middleWares/ctrlWrapper");

const {  createSpecialist, get } = specialists;
const router = express.Router();

router.post("/", ctrlWrapper(createSpecialist));
router.get("/", ctrlWrapper(get));

module.exports = routerSpecialists = router;
