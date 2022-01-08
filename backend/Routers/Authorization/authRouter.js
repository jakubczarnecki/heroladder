import { Router } from "express";
import jwt from "jsonwebtoken";

import utils from "../../utils.js";
import User from "../../Schema/User.js";

const authRouter = Router();

//register
authRouter.post("/register", async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(400).json({
        type: "email",
        message: "User with this e-mail already exists.",
      });
      return;
    }

    if (req.body.password1 !== req.body.password2) {
      res.status(400).json({
        type: "password",
        message: "Passwords must be the same,",
      });
      return;
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
