
import express from "express"
import { getQuestion } from "../controller/getQuestionController.js";

export const getQuestionRouter = express.Router();

getQuestionRouter.get("/question/:id",getQuestion)
