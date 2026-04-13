import express from "express";
import { createUser, loginUser } from "../contollers/userController.js";

const userRouter = express.Router();

userRouter.post("/",createUser)
userRouter.post("/login",loginUser)
// same route eka wenn oni habai duplicate wenn bh 

export default userRouter;