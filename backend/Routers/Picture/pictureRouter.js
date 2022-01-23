import { Router } from "express";
import multer from "multer";
import checkIfUserExists from "../User/middlewares.js";
import authenticate from "../Authorization/middlewares.js";
import utils from "../../utils.js";

import User from "../../Schema/User.js";

const pictureRouter = Router();
const upload = multer();

pictureRouter.param("id", checkIfUserExists);

//get avatar
pictureRouter.get("/:id/avatar", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (user.avatar == null) {
      res.status(200).json({});
      return;
    }

    res.status(200).type(user.avatar.contentType).send(user.avatar.data);
  } catch (err) {
    next(err);
  }
});

//update your background
pictureRouter.put("/avatar", upload.single("avatar"), authenticate, async (req, res, next) => {
  try {
    const user = await User.findById(res._id.id);
    console.log("FILE", req.file);
    console.log("BODY", req.body);
    console.log("HEADERS", req.headers);
    const data = utils.pictureFrom(req.file);

    if (user.avatar == null) {
      await User.findOneAndUpdate(
        { _id: res._id.id },
        {
          $set: { avatar: data },
        },
        { useFindAndModify: false }
      );

      res.status(200).send(`Your avatar has been added.`);
      return;
    }

    await User.findOneAndUpdate(
      { _id: res._id.id },
      {
        $set: { avatar: data },
      },
      { useFindAndModify: false }
    );

    res.status(200).send(`Your avatar has been updated.`);
  } catch (err) {
    next(err);
  }
});

//get background
pictureRouter.get("/:id/background", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (user.background == null) {
      res.status(200).json({});
      return;
    }

    res.status(200).type(user.background.contentType).send(user.background.data);
  } catch (err) {
    next(err);
  }
});

//update your background
pictureRouter.put("/background", upload.single("background"), authenticate, async (req, res, next) => {
  try {
    const user = await User.findById(res._id.id);
    const data = utils.pictureFrom(req.file);

    if (user.background == null) {
      await User.findOneAndUpdate(
        { _id: res._id.id },
        {
          $set: { background: data },
        },
        { useFindAndModify: false }
      );

      res.status(200).send(`Your background has been added.`);
      return;
    }

    await User.findOneAndUpdate(
      { _id: res._id.id },
      {
        $set: { background: data },
      },
      { useFindAndModify: false }
    );

    res.status(200).send(`Your background has been updated.`);
  } catch (err) {
    next(err);
  }
});

pictureRouter.use((err, req, res, next) => {
  res.status(500).json(err);
});

export default pictureRouter;
