import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },

    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },

    password: {
      type: String,
      require: true,
      min: 6,
    },
    picture: {
      data: Buffer,
      contentType: String,
    },
    tournamentsHistory: {
      type: Array,
      default: [],
    },
    achievements: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

export default User;
