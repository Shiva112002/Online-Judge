import Problem from "../models/problem.js";

export const getProblemByName=async(req,res) =>{
    const { name } = req.query;
    try{
        console.log(name);
        const problem = await Problem.findOne({ name });
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