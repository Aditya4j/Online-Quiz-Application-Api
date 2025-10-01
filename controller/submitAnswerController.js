import { quiz } from "../server.js";

export const submitAnswer = (req,res)=>{

        const {quizId,questionId,optionId} = req.body;

        if(!quizId){
            return res.status(404).json({message:"Quiz Id is required"});
        }

        if(!questionId || !optionId){
            return res.status(400).json({message:"Question Id or Option Id is missing"});
        }

        
        const data = quiz.find((q)=>q.quizId === quizId);
        if(!data){
                
            return res.status(404).json({message:"Quiz Not Found"});
        
        }

        let score = 0;
        let obj = {};
            
        console.log(questionId,optionId)

        for (let i = 0; i < questionId.length; i++) {
                const qId = questionId[i];
                const oId = optionId[i];
                console.log("question id",qId);
                console.log("option id",oId);
                const question = data.questions.find(q => q.question.id === qId);
                const option = question.options.find(opt => opt.optId === oId);
                console.log(question, option);
                obj[qId] = option.correct ? "Correct" : "Incorrect";
                if (option.correct) score++;
        }
       
        console.log(obj)

        res.status(200).json({message:"Answer Submitted",score:score,total:data.questions.length})
    } 