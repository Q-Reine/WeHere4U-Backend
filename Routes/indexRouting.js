import express from "express";
// Make sure this path matches the actual folder casing
import userRouter from "./UserRoute.js";

const mainRouter = express.Router();
mainRouter.use("/user", userRouter);

export default mainRouter;