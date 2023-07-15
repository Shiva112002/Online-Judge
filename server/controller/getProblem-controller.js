import Problem from "../models/problem.js";

export const getProblems=async(req,res) =>{
    try{
    const problems = await Problem.find();
    res.json(problems);
    }catch(error)
    {
        console.log(error.message);
        res.status(500).json({error:error.message})
    }
}