import mongoose from "mongoose";

const Member = new mongoose.Schema(
  {
    type: mongoose.SchemaTypes.ObjectId,
  },
  { _id: false }
);

const Team = new mongoose.Schema(
  {
    teamName: String,
    members: [],
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
    winner: {
      type: Number,
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
      type: mongoose.SchemaTypes.ObjectId,
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
    premium: {
      type: Boolean,
      default: false,
    },
    matches: [[Match]],
    winners: Team,
  },
  {
    timestamps: true,
  }
);

const Tournament = mongoose.model("Tournament", TournamentSchema);

export default Tournament;
