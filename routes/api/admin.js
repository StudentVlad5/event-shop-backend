const express = require("express");
const { events, users, packages } = require("../../controllers");
const {
  userValidationSchema,
  userEditValidationSchema,
  eventsValidationSchema,
  packagesValidationSchema,
} = require("../../models");

const {
  ctrlWrapper,
  authMiddleware,
  validation,
  upload,
  uploadEvent,
} = require("../../middleWares");

const router = express.Router();

// ---- EVENTS --- //
router.get(
  "/events",
  ctrlWrapper(authMiddleware),
  ctrlWrapper(events.getEvents)
);

router.post(
  "/events/create",
  ctrlWrapper(authMiddleware),
  uploadEvent.single("image"),
  validation(eventsValidationSchema),
  ctrlWrapper(events.createEvent)
);

router.get(
  "/events/:id",
  ctrlWrapper(authMiddleware),
  ctrlWrapper(events.getById)
);

router.delete(
  "/events/:id",
  ctrlWrapper(authMiddleware),
  ctrlWrapper(events.deleteEvent)
);

router.patch(
  "/events/:id",
  ctrlWrapper(authMiddleware),
  uploadEvent.single("image"),
  validation(eventsValidationSchema),
  ctrlWrapper(events.updateEvent)
);

// ---- USERS --- //

router.get("/users", ctrlWrapper(authMiddleware), ctrlWrapper(users.getUsers));

router.post(
  "/users/create",
  ctrlWrapper(authMiddleware),
  upload.single("avatar"),
  validation(userValidationSchema),
  ctrlWrapper(users.createUser)
);

router.get(
  "/users/:id",
  ctrlWrapper(authMiddleware),
  ctrlWrapper(users.getUserById)
);

router.delete(
  "/users/:id",
  ctrlWrapper(authMiddleware),
  ctrlWrapper(users.deleteUsers)
);

router.patch(
  "/users/:id",
  ctrlWrapper(authMiddleware),
  upload.single("avatar"),
  validation(userEditValidationSchema),
  ctrlWrapper(users.updateUser)
);

// ---- PACKAGES --- //

router.get("/packages", ctrlWrapper(authMiddleware), ctrlWrapper(packages.get));

router.post(
  "/packages/create",
  ctrlWrapper(authMiddleware),
  validation(packagesValidationSchema),
  ctrlWrapper(packages.createPackages)
);

router.get(
  "/packages/:id",
  ctrlWrapper(authMiddleware),
  ctrlWrapper(packages.getPackageById)
);

router.delete(
  "/packages/:id",
  ctrlWrapper(authMiddleware),
  ctrlWrapper(packages.deletePackage)
);

router.patch(
  "/packages/:id",
  ctrlWrapper(authMiddleware),
  validation(packagesValidationSchema),
  ctrlWrapper(packages.updatePackage)
);

module.exports = routerAdmin = router;
