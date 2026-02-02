const express = require("express");

const courseController = require("../controllers/courses.controller");
const { validationSchema } = require("../middleware/vaildationSchema");
const verifyToken = require("../middleware/verfiyToken");
const allowedTo = require("../middleware/allowedTo");
const userRoles = require("../utils/userRoles");

const router = express.Router();

router
  .route("/")
  .get(courseController.getAllCourses)
  .post(validationSchema(), courseController.addCourse);

router
  .route("/:courseId")
  .get(courseController.getCourse)
  .patch(courseController.UpdateCourse)
  .delete(
    verifyToken,
    allowedTo(userRoles.ADMIN, userRoles.MANGER),
    courseController.deleteCourse
  );

module.exports = router;
