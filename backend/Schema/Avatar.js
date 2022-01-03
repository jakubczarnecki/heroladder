import mongoose from "mongoose";

const AvatarSchema = new mongoose.Schema(
  {
    name: String,
    data: Buffer,
    contentType: String,
  },
  {
    timestamps: true,
  }
);

const Avatar = mongoose.model("Avatar", AvatarSchema);

export default Avatar;
