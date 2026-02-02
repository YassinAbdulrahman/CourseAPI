require("dotenv").config();
const express = require("express");
const httpStatusText = require("./utils/httpStatusText");
const cors = require("cors");
const path = require('path')
const coursesRouter = require("./routes/courses.route");
const usersRouter = require("./routes/users.route");
const mongoose = require("mongoose");

const app = express();

const url = process.env.MONGO_URL;

mongoose.connect(url).then(() => {
  console.log("mongodb server started");
});

app.use(cors());

app.use('/uploads', express.static(path.join(__dirname , 'uploads')));

app.use(express.json());

app.use("/api/courses", coursesRouter);
app.use("/api/users", usersRouter);

// Global Middleware For Not Found Routes
app.all("/*dummay", (req, res, next) => {
  return res
    .status(404)
    .json({ status: httpStatusText.ERROR, messgae: "NOT FOUND", code: 404 });
});

// Global Middleware For Error handler
app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    status: error.statusText || httpStatusText.ERROR,
    message: error.message,
    code: error.statusCode || 500,
    data: null,
  });
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`http://localhost:5000`);
});
