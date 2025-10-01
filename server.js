import express from "express";
import { createQuizRouter } from "./routes/createQuiz.js";
import { questionOptionRouter } from "./routes/questionAndOption.js";
import { getQuestionRouter } from "./routes/getQuestion.js";
import { submitAnswerRouter } from "./routes/sumbitAnswer.js";


const app = express();
app.use(express.json());


/* const quizFormat = {
    quizId:"",
    quizName:"",
    questions:[{
        question:{id:"",text:""},
        options:[{
            A:{optid:"",text:"",correct:false},
            B:{optid:"",text:"",correct:false},
            C:{optid:"",text:"",correct:false},
            D:{optid:"",text:"",correct:false}
        }]
    }]
} */

export const quiz = []

app.use("/",createQuizRouter);
app.use("/",questionOptionRouter);
app.use("/",getQuestionRouter);
app.use("/",submitAnswerRouter)




app.listen(8080,()=>{
    console.log("Server Started at Localhost:8080");
})

console.log(quiz)