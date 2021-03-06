import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    res.status(401).send({
      type: "token",
      message: "Missing token.",
    });
    return;
  }

  jwt.verify(token, process.env.PRIVATE_KEY, (err, _id) => {
    res._id = _id;
    if (err) {
      res.status(403).send({
        type: "token",
        message: "Invalid token.",
      });
      return;
    }
    next();
  });
};

export default authenticate;
