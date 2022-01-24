import { Router } from "express";
import utils from "../../utils.js";
import multer from "multer";
import { validationResult } from "express-validator";

import { validateUsername, validatePassword } from "../Validation.js";
import User from "../../Schema/User.js";
import Tournament from "../../Schema/Tournament.js";
import checkIfUserExists from "../User/middlewares.js";

const userRouter = Router();
const upload = multer();

userRouter.param("id", checkIfUserExists);

//get all users
userRouter.get("/all", async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

//get user by username
userRouter.get("/byUsername/:username", async (req, res, next) => {
  try {
    const string = req.params.username;

    if (string == "") {
      res.status(200).send(null);
      return;
    }

    const users = await User.find({ username: { $regex: string, $options: "i" } });

    res.status(200).json(users.slice(0, 8));
  } catch (err) {
    next(err);
  }
});

//get user by id
userRouter.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

//get tournaments organized by user
userRouter.get("/:id/organizedTournaments", async (req, res, next) => {
  try {
    const tournaments = await Tournament.find({ organizerId: req.params.id });
    res.status(200).json(tournaments);
  } catch (err) {
    next(err);
  }
});

//get participated tournaments by user
userRouter.get("/:id/participatedTournaments", async (req, res, next) => {
  try {
    const tournaments = await Tournament.find({
      "matches": { $elemMatch: { $elemMatch: { teams: { $elemMatch: { members: req.params.id } } } } },
      winners: null,
    });
    res.status(200).json(tournaments);
  } catch (err) {
    next(err);
  }
});

//get tournamentsHistory by userId
userRouter.get("/:id/tournamentsHistory", async (req, res, next) => {
  try {
    const tournaments = await Tournament.find({
      "matches": { $elemMatch: { $elemMatch: { teams: { $elemMatch: { members: req.params.id } } } } },
      winners: { $ne: null },
    });
    res.status(200).json(tournaments);
  } catch (err) {
    next(err);
  }
});

//generate feed
userRouter.post("/feed", async (req, res, next) => {
  const feed = [];
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  try {
    const premiumTournaments = await Tournament.find({
      "location.latitude": { $gt: latitude - 0.1, $lt: latitude + 0.1 },
      "location.longitude": { $gt: longitude - 0.1, $lt: longitude + 0.1 },
      "winners": null,
      "premium": true,
    });

    const nonPremiumTournaments = await Tournament.find({
      "location.latitude": { $gt: latitude - 1, $lt: latitude + 1 },
      "location.longitude": { $gt: longitude - 1, $lt: longitude + 1 },
      "winners": null,
      "premium": false,
    });

    feed.push(...premiumTournaments, ...nonPremiumTournaments);
    res.status(200).json(feed);
  } catch (err) {
    next(err);
  }
});

//generate area
userRouter.post("/area", async (req, res, next) => {
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const radius = req.body.radius;

  try {
    const tournaments = await Tournament.find({
      "location.latitude": { $gt: latitude - radius, $lt: latitude + radius },
      "location.longitude": { $gt: longitude - radius, $lt: longitude + radius },
      "winners": null,
    });

    res.status(200).json(tournaments);
  } catch (err) {
    next(err);
  }
});

//confirm operation by sending password
const confirmOperation = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: res._id.id });

    const isPasswordValid = await utils.comparePassword(req.body.confirmPassword, user.password);
    if (!isPasswordValid) {
      res.status(400).json({
        type: "password",
        message: "That wasn't correct. Try again?",
      });
      return;
    }
    next();
  } catch (err) {
    next(err);
  }
};

//update yourself
userRouter.put("/", confirmOperation, validateUsername(), validatePassword(), async (req, res, next) => {
  try {
    req.body.password && (req.body.password = await utils.encryptPassword(req.body.password));

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

    const updatedUser = {};
    req.body.username && (updatedUser.username = req.body.username);

    req.body.password1 && (updatedUser.password = req.body.password1);

    await User.findOneAndUpdate(
      { _id: res._id.id },
      {
        $set: updatedUser,
      },
      { useFindAndModify: false }
    );
    res.status(200).send(`Your account has been updated.`);
  } catch (err) {
    next(err);
  }
});

//delete yourself
userRouter.delete("/", confirmOperation, async (req, res, next) => {
  try {
    await Tournament.deleteMany({ organizerId: res._id.id });
    await User.findOneAndDelete({ _id: res._id.id });
    res.status(200).send(`Your account has been deleted successfully.`);
  } catch (err) {
    next(err);
  }
});

userRouter.use((err, req, res, next) => {
  res.status(500).json(err);
});

export default userRouter;
