const { Router } = require("express");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const User = require("../src/models/User");

const router = Router();

router.post(
  "/sign-up",
  [
    check("name", "Incorrect name").isLength({ min: 2 }),
    check("surname", "Incorrect surname").isLength({ min: 2 }),
    check("username", "Incorrect username").isLength({ min: 3 }),
    check("email", "Incorrect email").normalizeEmail().isEmail(),
    check("password", "Min length 8").isLength({ min: 8 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Incorrect data during registration!",
        });
      }

      const { name, surname, username, email, password } = req.body;

      const candidate = await User.findOne({ email });
      if (candidate) {
        return res.status(400).json({ message: "Such e-mail already exist!" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({
        name,
        surname,
        username,
        email,
        password: hashedPassword,
      });

      await user.save();

      res.status(201).json({ message: "User created" });
    } catch (e) {
      res.status(500).json({ message: "Something went wrong!" });
    }
  }
);

router.post(
  "/sign-in",
  [
    check("username", "Enter correct username").exists(),
    check("password", "Enter password").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Incorrect data during login!",
        });
      }
      const { username, password } = req.body;

      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ message: "Incorrect password, try again! " });
      }

      const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
        expiresIn: "1h",
      });

      res.json({ token, userId: user.id });
    } catch (e) {
      res.status(500).json({ message: "Something went wrong,,,,,,,,!" });
    }
  }
);

module.exports = router;
