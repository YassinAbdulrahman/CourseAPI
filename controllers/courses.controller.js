const { courses } = require("../data/courses");
const { validationResult } = require("express-validator");
const Course = require("../models/course.model");
const httpStatusText = require("../utils/httpStatusText");
const asyncWrapper = require("../middleware/asyncWrapper");
const appError = require("../utils/appError");

const getAllCourses = asyncWrapper(async (req, res) => {
  const query = req.query;

  const limit = query.limit || 10;
  const page = query.page || 1;
  const skip = (page - 1) * limit;

  //get all courses from the database using Course Model
  const courses = await Course.find().limit(limit).skip(skip);

  res.status(200).json({ status: httpStatusText.SUCCESS, data: { courses } });
});

const getCourse = asyncWrapper(async (req, res, next) => {
  const course = await Course.findById(req.params.courseId);
  if (!course) {
    const error = appError.create("Not Found Course", 404, httpStatusText.FAIL);
    return next(error);
  }
  return res.json({ status: httpStatusText.SUCCESS, data: { course } });
});

const addCourse = asyncWrapper(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = appError.create(errors.array(), 400, httpStatusText.FAIL);
    return next(error);
  }

  const newCourse = new Course({
    title: req.body.title,
    price: req.body.price,
  });

  await newCourse.save();
  res.status(201).json({ status: httpStatusText.SUCCESS, data: { newCourse } });
});

const UpdateCourse = asyncWrapper(async (req, res) => {
  const courseId = req.params.courseId;
  const updateCourse = await Course.updateOne(
    { _id: courseId },
    { $set: { ...req.body } }
  );
  return res
    .status(200)
    .json({ status: httpStatusText.SUCCESS, data: { updateCourse } });
});

const deleteCourse = asyncWrapper(async (req, res) => {
  await Course.deleteOne({ _id: req.params.courseId });
  
  res.status(200).json({ status: httpStatusText.SUCCESS, data: null });
});

module.exports = {
  getAllCourses,
  getCourse,
  addCourse,
  UpdateCourse,
  deleteCourse,
};
