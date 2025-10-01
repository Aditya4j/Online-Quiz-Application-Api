import express from "express"
import { submitAnswer } from "../controller/submitAnswerController.js";


export const submitAnswerRouter = express.Router();

submitAnswerRouter.post("/submit-answer",submitAnswer);