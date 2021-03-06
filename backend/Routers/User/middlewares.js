import User from "../../Schema/User.js";

const checkIfUserExists = async (req, res, next, id) => {
  try {
    const exists = await User.exists({ _id: id });
    if (!exists) {
      res.status(404).send({
        type: "user",
        message: "This user doesnt exist.",
      });
      return;
    }
    next();
  } catch (err) {
    res.status(500).json(err);
  }
};

export default checkIfUserExists;
