import { Router } from "express";
import utils from "../../utils.js";
import multer from "multer";

import User from "../../Schema/User.js";
import Tournament from "../../Schema/Tournament.js";
import Avatar from "../../Schema/Avatar.js";
import Background from "../../Schema/Background.js";
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
userRouter.get("/byUsername", async (req, res, next) => {
  try {
    const string = req.body.username;

    if (string == "") {
      res.status(200).send(null);
      return;
    }

    const users = await User.find({ username: { $regex: string, $options: "i" } });

    if (users.length == 0) {
      res.status(400).send({ message: "Sorry, we couldnt find any matches for this username :(", type: "login" });
      return;
    }

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
    const tournaments = await Tournament.find({ organizerId: req.params.id });
    res.status(200).json(tournaments);
  } catch (err) {
    next(err);
  }
});

//get tournamentsHistory by userId
userRouter.get("/:id/tournamentsHistory", async (req, res, next) => {
  try {
    const tournaments = await Tournament.find({ organizerId: req.params.id });
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
        type: "login",
        message: "That wasn't correct. Try again?",
      });
      return;
    }
  } catch (err) {
    next(err);
  }
};

//update yourself
userRouter.put("/", confirmOperation, async (req, res, next) => {
  try {
    req.body.password && (req.body.password = await utils.encryptPassword(req.body.password));

    const updatedUser = {};
    req.body.username && (updatedUser.username = req.body.username);
    req.body.password && (updatedUser.password = req.body.password);

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

//get avatar
userRouter.get("/:id/avatar", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const avatarId = user.avatarId;
    const avatar = await Avatar.findById(avatarId);

    res.status(200).json(avatar);
  } catch (err) {
    next(err);
  }
});

//update your avatar
userRouter.put("/avatar", upload.single("avatar"), async (req, res, next) => {
  try {
    const user = await User.findById(res._id.id);
    const data = utils.pictureFrom(req.file);

    if (user.avatarId == null) {
      const newAvatar = new Avatar(data);
      const avatar = await newAvatar.save();

      await User.findOneAndUpdate(
        { _id: res._id.id },
        {
          $set: { avatarId: avatar.id },
        },
        { useFindAndModify: false }
      );

      res.status(200).send(`Your avatar has been added.`);
      return;
    }

    await Avatar.findOneAndUpdate(
      { _id: user.avatarId },
      {
        $set: data,
      },
      { useFindAndModify: false }
    );

    res.status(200).send(`Your avatar has been updated.`);
  } catch (err) {
    next(err);
  }
});

//get background
userRouter.get("/:id/background", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const backgroundId = user.backgroundId;
    const background = await Background.findById(backgroundId);

    res.status(200).json(background);
  } catch (err) {
    next(err);
  }
});

//update your background
userRouter.put("/background", upload.single("background"), async (req, res, next) => {
  try {
    const user = await User.findById(res._id.id);
    const data = utils.pictureFrom(req.file);

    if (user.backgroundId == null) {
      const newBackground = new Background(data);
      const background = await newBackground.save();

      await User.findOneAndUpdate(
        { _id: res._id.id },
        {
          $set: { backgroundId: background.id },
        },
        { useFindAndModify: false }
      );

      res.status(200).send(`Your background has been added.`);
      return;
    }

    await Avatar.findOneAndUpdate(
      { _id: user.backgroundId },
      {
        $set: data,
      },
      { useFindAndModify: false }
    );

    res.status(200).send(`Your background has been updated.`);
  } catch (err) {
    next(err);
  }
});

userRouter.use((err, req, res, next) => {
  res.status(500).json(err);
});

export default userRouter;
