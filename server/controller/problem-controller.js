//import Problem from "../models/problem.js";

const {Problem}=require('../models/problem.js');
const addProblem=async(req,res) =>{
    try{
        const requestData = req.body; // Assuming the request body contains the data you want to insert
        const { name, statement } = requestData;
    
        // Create a new document based on the Problem model
        const newProblem = new Problem({ name, statement });
    
        // Save the new document to the collection
        await newProblem.save();
    
        // Send a response back to the frontend indicating the successful insertion
        res.status(200).json({ message: 'Data inserted successfully' });
    }catch(error)
    {
        console.log(error.message);
        res.status(500).json({error:error.message})
    }
}
module.exports={
    addProblem,
}