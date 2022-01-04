import { Router } from "express";
import jwt from "jsonwebtoken";

import utils from "../../utils.js";
import User from "../../Schema/User.js";

const authRouter = Router();

//register
authRouter.post("/register", async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    user && res.status(404).json("User with this e-mail already exists.");

    const hashedPassword = await utils.encryptPassword(req.body.password);

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
    !user && res.status(404).json("That wasn't correct. Try again?");

    const isPasswordValid = await utils.comparePassword(req.body.password, user.password);
    !isPasswordValid && res.status(404).json("That wasn't correct. Try again?");

    const token = jwt.sign({ id: user._id }, process.env.PRIVATE_KEY, {
      expiresIn: "6000s",
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
