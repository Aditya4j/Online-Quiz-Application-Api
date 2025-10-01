import express from "express"
import { createQuiz } from "../controller/createQuizController.js";


export const createQuizRouter = express.Router();


createQuizRouter.post("/create-quiz",createQuiz)