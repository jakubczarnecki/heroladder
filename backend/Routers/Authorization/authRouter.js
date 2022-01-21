import { Router } from "express";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

import { validateUsername, validateEmail, validatePassword } from "../Validation.js";
import utils from "../../utils.js";
import User from "../../Schema/User.js";

const authRouter = Router();

//register
authRouter.post("/register", validateUsername(), validateEmail(), validatePassword(), async (req, res, next) => {
  try {
    const errors = [];

    const userWithSameUsername = await User.findOne({ username: req.body.username });
    if (userWithSameUsername) {
      errors.push({
        type: "username",
        message: "User with this username already exists.",
      });
    }

    const userWithSameEmail = await User.findOne({ email: req.body.email });
    if (userWithSameEmail) {
      errors.push({
        type: "email",
        message: "User with this e-mail already exists.",
      });
    }

    if (req.body.password1 !== req.body.password2) {
      errors.push({
        type: "password2",
        message: "Passwords must be the same.",
      });
    }

    errors.push(
      ...validationResult(req)
        .array()
        .map((result) => result.msg)
    );

    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    const hashedPassword = await utils.encryptPassword(req.body.password1);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const finalUser = await newUser.save();
    res.status(200).json(finalUser);
  } catch (err) {
    next(err);
  }
});

//login
authRouter.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).json({
        type: "login",
        message: "That wasn't correct. Try again?",
      });
      return;
    }
    const isPasswordValid = await utils.comparePassword(req.body.password, user.password);
    if (!isPasswordValid) {
      res.status(400).json({
        type: "login",
        message: "That wasn't correct. Try again?",
      });
      return;
    }

    const token = jwt.sign({ id: user._id }, process.env.PRIVATE_KEY, {
      expiresIn: "60000s",
    });

    user._doc.token = token;
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

authRouter.use((err, req, res, next) => {
  res.status(500).json(err);
});

export default authRouter;
