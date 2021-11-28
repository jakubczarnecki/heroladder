import express, { json } from "express";
import { config } from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

import authRouter from "./Routers/authRouter.js";
import userRouter from "./Routers/userRouter.js";
import tournamentRouter from "./Routers/tournamentRouter.js";

const PORT = "8800";

config();

//middleware
app.use(json());
app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());

//routing middleware
app.use("/api/auth", authRouter.authRouter);
app.use("/api/users", authRouter.authenticate, userRouter);
app.use("/api/tournaments", authRouter.authenticate, tournamentRouter);

//connection
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => {
    console.log("Connected to MongoDB.");
  }
);

app.listen("8800", () => {
  console.log(`Server started at port ${PORT}`);
});
