const ctrlWrapper = require("./ctrlWrapper");
const { upload } = require("./uploadMiddleware");
const { uploadEvent } = require("./uploadEventMiddleware");
const authMiddleware = require("./authMiddleware");
const tokenValidation = require("./tokenValidation");
const { validateId } = require("./validationIdFavorites");
const { validation } = require("./validation");

module.exports = {
  ctrlWrapper,
  upload,
  uploadEvent,
  authMiddleware,
  tokenValidation,
  validation,
  validateId,
};
