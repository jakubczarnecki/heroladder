import mongoose from "mongoose";

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
    matches: [
      {
        number: {
          type: Number,
          require: true,
        },
        participants: [
          {
            teamName: String,
            members: {
              type: Array,
              default: [],
            },
          },
        ],
        winnerID: {
          type: String,
        },
      },
    ],
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
