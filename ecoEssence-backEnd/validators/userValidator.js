const { check, validationResult } = require("express-validator");

const validateUser = [
  check("name").isLength({ min: 3 }).withMessage("Name must be at least 3 characters"),
  check("email").isEmail().withMessage("Email is not valid"),
  check("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateUser;
