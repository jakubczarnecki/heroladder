import Tournament from "../Schema/Tournament.js";
import { Router } from "express";

const tournamentRouter = Router();

//create tournament
tournamentRouter.post("/create", async (req, res, next) => {
  try {
    const newTournament = new Tournament({
      tournamentName: req.body.tournamentName,
      discipline: req.body.discipline,
      organizer: req.body.organizer,
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

//update tournament by id
tournamentRouter.put("/:id", async (req, res, next) => {
  try {
    await Tournament.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      },
      { useFindAndModify: false }
    );
    res.status(200).send(`Tournament has been updated.`);
  } catch (err) {
    next(err);
  }
});

//delete tournament by id
tournamentRouter.delete("/:id", async (req, res, next) => {
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
