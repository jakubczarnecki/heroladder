import express, { json } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import config from "config";

const app = express();

import authRouter from "./Routers/Authorization/authRouter.js";
import userRouter from "./Routers/User//userRouter.js";
import tournamentRouter from "./Routers/Tournament/tournamentRouter.js";
import pictureRouter from "./Routers/Picture/pictureRouter.js";
import authenticate from "./Routers/Authorization/middlewares.js";

const PORT = "8800";

dotenv.config();

//middleware
app.use(json());
app.use(helmet());
app.use(cors());

if (config.util.getEnv("NODE_ENV") !== "test") {
  app.use(morgan("tiny"));
}

//routing middleware
app.use("/api/auth", authRouter);
app.use("/api/users", authenticate, userRouter);
app.use("/api/tournaments", authenticate, tournamentRouter);
app.use("/api/pictures", pictureRouter);

//connection
mongoose.connect(config.DBHost, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {
  console.log("Connected to MongoDB.");
});

app.listen("8800" || 8800, () => {
  console.log(`Server started at port ${PORT}`);
});

export default app;
