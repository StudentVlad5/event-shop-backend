const {
  Users,
  userValidationSchema,
  userUpdateValidationSchema,
  userEditValidationSchema,
  userRegistationSchema,
} = require("./users");
const { Categories, categoriesValidationSchema } = require("./category");
const { Events, eventsValidationSchema } = require("./events");
const { Specialists, specialistValidationSchema } = require("./specialist");

module.exports = {
  Users,
  userValidationSchema,
  userUpdateValidationSchema,
  userEditValidationSchema,
  Categories,
  categoriesValidationSchema,
  Events,
  eventsValidationSchema,
  userRegistationSchema,
  Specialists,
  specialistValidationSchema,
};
