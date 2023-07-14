import Problem from "../models/problem.js";

export const addProblem=async(request,response) =>{
    try{

    }catch(error)
    {
        console.log(error.message);
        response.status(500).json({error:error.message})
    }
}