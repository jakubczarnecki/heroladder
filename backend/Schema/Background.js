import mongoose from "mongoose";

const BackgroundSchema = new mongoose.Schema(
  {
    name: String,
    data: Buffer,
    contentType: String,
  },
  {
    timestamps: true,
  }
);

const Background = mongoose.model("Background", BackgroundSchema);

export default Background;
