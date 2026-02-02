const { body } = require("express-validator");
const validationSchema = () => {
  return [
    body("title")
      .notEmpty()
      .isLength({ min: 2 })
      .withMessage("title is require"),
    body("price").notEmpty().withMessage("Price is require"),
  ];
};

module.exports = {
  validationSchema,
};
