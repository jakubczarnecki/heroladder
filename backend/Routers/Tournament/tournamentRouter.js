import { Router } from "express";

import authorizeOrginizer from "./middlewares.js";
import checkIfUserExists from "../User/middlewares.js";
import Tournament from "../../Schema/Tournament.js";

const tournamentRouter = Router();

const checkIfTournamentExists = async (req, res, next, id) => {
  try {
    const exists = await Tournament.exists({ _id: id });
    if (!exists) {
      res.status(404).send({
        message: "Tournament with this ID doesn't exists.",
        type: "general",
      });
      return;
    }
    next();
  } catch (err) {
    res.status(500).json(err);
  }
};

tournamentRouter.param("id", checkIfTournamentExists);

//create tournament
tournamentRouter.post("/create", async (req, res, next) => {
  try {
    const newTournament = new Tournament({
      tournamentName: req.body.tournamentName,
      discipline: req.body.discipline,
      organizerId: res._id.id,
      date: req.body.date,
      bracketSize: req.body.bracketSize,
      teamSize: req.body.teamSize,
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
    if (res.tournament.matches.length != 0) {
      res.status(400).json("Tournament has been already initialized.");
      return;
    }

    let arr = [];
    let updatedMatches = [];
    let stages = Math.log2(res.tournament.bracketSize);
    let stepDivider = 2;
    let count = 1;

    for (let i = 1; i <= stages; i++) {
      for (let j = 1; j <= res.tournament.bracketSize / stepDivider; j++) {
        arr.push({
          number: count,
          teams: [],
          winnerId: null,
        });
        count++;
      }
      updatedMatches.push(arr);
      stepDivider *= 2;
      arr = [];
    }

    await Tournament.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: { matches: updatedMatches },
      },
      { useFindAndModify: false }
    );

    res.status(200).json("Tournament has been initialized succesfully.");
  } catch (err) {
    next(err);
  }
});

//add team to the tournament
tournamentRouter.put("/:id/join", async (req, res, next) => {
  try {
    const tournament = await Tournament.findById(req.params.id);

    //check if last match is full of teams
    const nrOfTeamsInLastMatch = tournament.matches[0].find((match) => match.number == tournament.matches[0].length).teams.length;
    if (nrOfTeamsInLastMatch == 2) {
      res.status(403).send("This tournament is full!");
      return;
    }

    //create new team object
    req.body.members = [res._id.id, ...req.body.members];
    const newTeam = {
      teamName: req.body.teamName,
      members: req.body.members,
    };

    //for every member registered in tournament check if equal to one of members in new team
    let forbiddenTeamName;
    let forbiddenMembers = [];

    req.body.members.forEach((newMember) => {
      tournament.matches[0].forEach((match) => {
        match.teams.forEach((team) => {
          if (team.teamName == newTeam.teamName) forbiddenTeamName = team.teamName;
          team.members.forEach((existingMember) => {
            if (newMember == existingMember) {
              forbiddenMembers.push(newMember);
            }
          });
        });
      });
    });

    if (forbiddenTeamName || forbiddenMembers.length > 0) {
      let err = [];
      if (forbiddenTeamName) {
        err.push({
          message: `Team with name: ${forbiddenTeamName} is already registered in this tournament!`,
          type: "teamName",
        });
      }
      if (forbiddenMembers.length > 0) {
        err.push({
          message: `Following members are already registered in this tournament: ${forbiddenMembers.map((member) => `${member}`)}`,
          type: "members",
        });
      }

      res.status(403).send(err);
      return;
    }

    tournament.matches[0].every((match) => {
      if (match.teams.length < 2) {
        match.teams.push(newTeam);
        return false;
      }
      return true;
    });

    await Tournament.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: { matches: tournament.matches },
      },
      { useFindAndModify: false }
    );

    res.status(200).json(team);
  } catch (err) {
    next(err);
  }
});

//claim winner of the match
tournamentRouter.put("/:id/claimWinner", authorizeOrginizer, async (req, res, next) => {
  try {
    const tournament = await Tournament.findById(req.params.id);

    tournament.matches.find((match) => match.number == req.body.number).winnerId = req.body.winnerId;

    step = nrInArray = Match.floor((req.body.number - 1) / 2);

    // tournament.matches[]

    await Tournament.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: { matches: tournament.matches },
      },
      { useFindAndModify: false }
    );

    res.status(200).send(`Tournament has been updated.`);
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
