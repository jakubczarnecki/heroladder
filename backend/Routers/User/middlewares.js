import User from "../../Schema/User.js";
import userRouter from "./userRouter.js";

const checkIfUserExists = async (req, res, next, id) => {
  try {
    const exists = await User.exists({ _id: id });
    if (!exists) {
      res.status(404).send("User with this ID doesn't exists.");
      return;
    }
    next();
  } catch (err) {
    res.status(500).json(err);
  }
};

export default checkIfUserExists;
