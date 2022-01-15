import mongoose from "mongoose";

const Avatar = new mongoose.Schema(
  {
    name: String,
    data: Buffer,
    contentType: String,
  },
  {
    timestamps: true,
  }
);

const Background = new mongoose.Schema(
  {
    name: String,
    data: Buffer,
    contentType: String,
  },
  {
    timestamps: true,
  }
);

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

    avatar: Avatar,

    background: Background,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

export default User;
