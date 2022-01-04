import Tournament from "../../Schema/Tournament.js";
import authorizeOrginizer from "./middlewares.js";
import { Router } from "express";

const tournamentRouter = Router();

//create tournament
tournamentRouter.post("/create", async (req, res, next) => {
  try {
    const newTournament = new Tournament({
      tournamentName: req.body.tournamentName,
      discipline: req.body.discipline,
      organizerId: res._id.id,
      date: req.body.date,
      bracketSize: req.body.bracketSize,
      location: req.body.location,
      description: req.body.description,
    });

    const finalTournament = await newTournament.save();
    res.status(200).json(finalTournament);
  } catch (err) {
    next(err);
  }
});

//open tournament by id and
//generate empty bracket for tournament with specified bracketSize
tournamentRouter.put("/:id/init", authorizeOrginizer, async (req, res, next) => {
  try {
    const arr = [];

    if (res.tournament.matches) {
      res.status(400).json("Tournament has been already initialized.");
      return;
    }

    for (let i = 1; i < res.tournament.bracketSize; i++) {
      arr.push({
        number: i,
        participants: [],
        winnerID: null,
      });
    }

    await Tournament.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: { matches: arr },
      },
      { useFindAndModify: false }
    );

    res.status(200).json("Tournament has been initialized succesfully.");
  } catch (err) {
    next(err);
  }
});

//update tournament by id
tournamentRouter.put("/:id", authorizeOrginizer, async (req, res, next) => {
  try {
    const updatedTournament = {};
    req.body.tournamentName && (updatedTournament.tournamentName = req.body.tournamentName);
    req.body.date && (updatedTournament.date = req.body.date);
    req.body.location && (updatedTournament.location = req.body.location);
    req.body.description && (updatedTournament.description = req.body.description);

    await Tournament.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: updatedTournament,
      },
      { useFindAndModify: false }
    );
    res.status(200).send(`Tournament has been updated.`);
  } catch (err) {
    next(err);
  }
});

//get all tournaments
tournamentRouter.get("/all", async (req, res, next) => {
  try {
    const tournaments = await Tournament.find();
    res.status(200).json(tournaments);
  } catch (err) {
    next(err);
  }
});

//get tournament by id
tournamentRouter.get("/:id", async (req, res, next) => {
  try {
    const tournament = await Tournament.findById(req.params.id);
    res.status(200).json(tournament);
  } catch (err) {
    next(err);
  }
});

//delete tournament by id
tournamentRouter.delete("/:id", authorizeOrginizer, async (req, res, next) => {
  try {
    await Tournament.findOneAndDelete({ _id: req.params.id });
    res.status(200).send(`Tournament has been deleted.`);
  } catch (err) {
    next(err);
  }
});

tournamentRouter.use((err, req, res, next) => {
  res.status(500).json(err);
});

export default tournamentRouter;
