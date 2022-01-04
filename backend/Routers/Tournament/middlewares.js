import Tournament from "../../Schema/Tournament.js";

const authorizeOrginizer = async (req, res, next) => {
  try {
    res.tournament = await Tournament.findById(req.params.id);

    if (res._id.id != res.tournament.organizerId) {
      res.status(401).send("You must be orginizer to edit the tournament.");
      return;
    }
    next();
  } catch (err) {
    res.status(500).json(err);
  }
};

export default authorizeOrginizer;
