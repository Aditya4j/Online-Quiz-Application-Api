import { quiz } from "../server.js";

export const getQuestion = (req,res)=>{
    const quizId = req.params.id;
    if(!quizId){
        return res.status(404).json({message:"Quiz Id is required"})
    }

    const data = quiz.find((q)=>q.quizId === quizId);
    if(!data){
        return res.status(404).json({message:"Quiz Not Found"});
    }

    //const question = data.questions.map((q)=> q.question.text);
    //console.log(question.options)
    const question = data.questions
    res.status(200).json({question})

    
}