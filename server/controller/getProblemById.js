//import Problem from "../models/problem.js";

const {Problem}=require('../models/problem.js');

 const getProblemById=async(req,res) =>{
    const { problemId } = req.query;
    try{
        console.log(problemId);
        const problem = await Problem.findById(problemId);
        if (!problem) {
          // If no problem found with the provided name
          return res.status(404).json({ error: 'Problem not found' });
        }
        // Send the retrieved problem as the response
        res.json(problem);
    }catch(error)
    {
        console.log(error.message);
        res.status(500).json({error:error.message})
    }
}
module.exports={
    getProblemById,
}