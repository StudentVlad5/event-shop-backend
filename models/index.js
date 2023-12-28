const {
  Users,
  userValidationSchema,
  userUpdateValidationSchema,
  userEditValidationSchema,
  userRegistationSchema,
} = require('./users');
const { Packages, packagesValidationSchema } = require('./package');
const { Events, eventsValidationSchema } = require('./events');

module.exports = {
  Users,
  userValidationSchema,
  userUpdateValidationSchema,
  userEditValidationSchema,
  Packages,
  packagesValidationSchema,
  Events,
  eventsValidationSchema,
  userRegistationSchema,
};
