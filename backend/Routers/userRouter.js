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

//update yourself
userRouter.put("/", async (req, res, next) => {
  req.body.password &&
    (req.body.password = await utils.encryptPassword(req.body.password));
  try {
    await User.findOneAndUpdate(
      { _id: res._id.id },
      {
        $set: req.body,
      },
      { useFindAndModify: false }
    );
    res.status(200).send(`Your account has been updated.`);
  } catch (err) {
    next(err);
  }
});

//delete yourself
userRouter.delete("/", async (req, res, next) => {
  try {
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
