import express from "express";
import authController from "../controllers/auth-controller.js";

const authRouter = express.Router();

authRouter.get("/token", authController.getToken);

export default authRouter;
