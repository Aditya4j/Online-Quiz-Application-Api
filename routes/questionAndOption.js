import express from "express";
import { questionOption } from "../controller/questionOptionController.js";

export const questionOptionRouter = express.Router();

questionOptionRouter.post("/add-question-option",questionOption)