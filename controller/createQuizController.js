import { quiz } from "../server.js";

export const createQuiz = (req,res)=>{
    const {quizName,quizId} = req.body;
    if(!quizName){
        return res.status(400).json({message:"Quiz name is required"});
    }

    const newquiz = {
        quizId,
        quizName,
        questions:[]
    }
  
    quiz.push(newquiz);
    console.log(quiz)
    res.status(200).json({message:"Quiz Created Sucessfully"});

}