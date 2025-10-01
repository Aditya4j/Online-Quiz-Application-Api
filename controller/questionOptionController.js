import { quiz } from "../server.js";


export const questionOption = (req,res)=>{
    const {quizId,question,options} = req.body;
    if(!quizId){
        return res.status(404).json({message:"Quiz Id is required"});
    }
    if(!question || !options){
        return res.status(400).json({messahe:"Question and options are required"});
    }

    const data =quiz.find((q)=>q.quizId === quizId);
    if(!data){
        return res.status(404).json({message:"Quiz not found"});
    }

    const newquestion = { question: { id: question.id, text: question.text },
      options: options.map((opt) => ({
      optId: opt.optId,
      text: opt.text,
      correct: opt.correct
    }))}
     
   data.questions.push(newquestion);

    console.log(quiz.options);
    res.status(200).json({message:"Question and option Added"});
}