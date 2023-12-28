const Joi = require('joi');
// const { string } = require('joi');
const mongoose = require('mongoose');
require('mongoose-type-email');
require('mongoose-type-url');

const userRegistationSchema = Joi.object({
  name: Joi.string().min(3).max(32).required(),
  surname: Joi.string().min(3).max(32),
  email: Joi.string().email().required(),
  phone: Joi.string().min(7).max(13).required(),
  packages: Joi.string(),
  company: Joi.string(),
  position: Joi.string(),
});

const userValidationSchema = Joi.object({
  name: Joi.string().min(1).max(32).required(),
  surname: Joi.string().min(1).max(32),
  email: Joi.string().email().required(),
  password: Joi.string().min(7).max(32),
  phone: Joi.string().min(1).max(13).required(),
  birthday: Joi.date(),
  avatar: Joi.string().uri(),
  company: Joi.string(),
  position: Joi.string(),
  packages: Joi.array(),
  //   .items(
  //   Joi.object({
  //     name: Joi.string(),
  //     termActive: Joi.object({
  //       from: Joi.date(),
  //       to: Joi.date(),
  //     }),
  //   })
  // ),
  events: Joi.array(),
  status: Joi.string(),
  role: Joi.string(),
});

const userUpdateValidationSchema = Joi.object({
  name: Joi.string().min(1).max(32),
  surname: Joi.string().min(1).max(32),
  email: Joi.string().email(),
  // password: Joi.string().min(7).max(32),
  phone: Joi.string().min(1).max(13),
  birthday: Joi.date(),
  avatar: Joi.string().uri(),
  packages: Joi.array(),
  company: Joi.string(),
  position: Joi.string(),
  status: Joi.string(),
  role: Joi.string(),
});

const userEditValidationSchema = Joi.object({
  name: Joi.string().min(1).max(32),
  surname: Joi.string().min(1).max(32),
  email: Joi.string().email(),
  phone: Joi.string().min(1).max(13),
  birthday: Joi.date(),
  avatar: Joi.string().uri(),
  company: Joi.string(),
  position: Joi.string(),
  packages: Joi.array(),
  // .items(
  // Joi.object({
  //   name: Joi.string(),
  //   termActive: Joi.object({
  //     from: Joi.date(),
  //     to: Joi.date(),
  //   }),
  // })
  // ),
  events: Joi.array(),
  status: Joi.string(),
  role: Joi.string(),
});

const UsersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Set user name'],
    },
    surname: {
      type: String,
      required: [true, 'Set user surname'],
    },
    email: {
      type: mongoose.SchemaTypes.Email,
      required: [true, 'Set email user'],
      unique: true,
    },
    password: {
      type: String,
    },
    phone: {
      type: String,
      required: [true, 'Set phone number'],
    },
    birthday: {
      type: Date,
      // required: [false, 'Set birthday user'],
    },
    avatar: {
      type: mongoose.SchemaTypes.Url,
      default: '',
    },
    company: {
      type: String,
    },
    position: {
      type: String,
    },
    events: {
      type: Array,
      default: [],
    },
    packages: {
      type: Array,
      default: [
        {
          name: '',
          termActive: { from: '', to: '' },
        },
      ],
    },
    status: {
      type: String,
      default: 'inActive',
    },
    role: {
      type: String,
      default: 'candidate',
    },
    authToken: {
      type: String,
      default: '',
    },
    refreshToken: {
      type: String,
      default: '',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Users = mongoose.model('users', UsersSchema);

module.exports = {
  Users,
  userValidationSchema,
  userUpdateValidationSchema,
  userEditValidationSchema,
  userRegistationSchema,
};
