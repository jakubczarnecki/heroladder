import mongoose from "mongoose";

const Team = new mongoose.Schema(
  {
    teamName: String,
    members: Array,
  },
  { _id: false }
);

const Match = new mongoose.Schema(
  {
    number: {
      type: Number,
      require: true,
    },
    teams: [Team],
    winnerID: {
      type: String,
    },
  },
  { _id: false }
);

const TournamentSchema = new mongoose.Schema(
  {
    tournamentName: {
      type: String,
      require: true,
      min: 3,
      max: 40,
    },
    discipline: {
      type: String,
      require: true,
      min: 3,
      max: 40,
    },
    organizerId: {
      type: String,
      require: true,
      min: 3,
      max: 40,
    },
    date: {
      type: Date,
      require: true,
    },
    bracketSize: {
      type: Number,
      require: true,
    },
    teamSize: {
      type: Number,
      require: true,
    },
    location: {
      type: String,
      require: true,
      min: 3,
      max: 40,
      default: "",
    },
    description: {
      type: String,
      max: 500,
      default: "",
    },
    matches: [Match],
    winner: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Tournament = mongoose.model("Tournament", TournamentSchema);

export default Tournament;
