import { Router } from "express";
import User from "../Schema/User.js";
import jwt from "jsonwebtoken";
import utils from "../utils.js";

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
      picture: req.body.picture,
      tournamentsHistory: req.body.tournamentsHistory,
      achievements: req.body.achievements,
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
    !user && res.status(404).json("User not found.");

    const isPasswordValid = await utils.comparePassword(
      req.body.password,
      user.password
    );
    !isPasswordValid && res.status(404).json("Wrong Password.");

    const token = jwt.sign({ id: user._id }, process.env.PRIVATE_KEY, {
      expiresIn: "600s",
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

const authenticate = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  !token && res.status(401).send("Missing token.");

  jwt.verify(token, process.env.PRIVATE_KEY, (err, _id) => {
    res._id = _id;
    err && res.status(403).send("Invalid token.");
    next();
  });
};

export default { authRouter, authenticate };
