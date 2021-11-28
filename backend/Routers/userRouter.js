import User from "../Schema/User.js";
import { Router } from "express";
import utils from "../utils.js";

const userRouter = Router();

//get all users
userRouter.get("/all", async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
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

//update user by id
userRouter.put("/:id", async (req, res, next) => {
  try {
    req.body.password &&
      (req.body.password = await utils.encryptPassword(req.body.password));
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      },
      { useFindAndModify: false }
    );
    res.status(200).send(`Account ${user.username} has been updated.`);
  } catch (err) {
    next(err);
  }
});

//delete user by id
userRouter.delete("/:id", async (req, res, next) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });
    res.status(200).send(`Account ${user.username} has been deleted.`);
  } catch (err) {
    next(err);
  }
});

userRouter.use((err, req, res, next) => {
  res.status(500).json(err);
});

export default userRouter;
