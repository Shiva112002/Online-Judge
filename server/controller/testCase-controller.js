
const {Testcase}=require('../models/problem.js');

const addTestCase=async(req,res)=>{
    try{
        const requestData = req.body; 
        const { input,output,problemId } = requestData;
        let testcase = await Testcase.findOne({ problemId });

        if (!testcase) {
          // If the testcase doesn't exist, create a new one with the given problemId
          testcase = new Testcase({ problemId, testcases: [] });
        }
    
        // Push the new input and output into the testcases array
        testcase.testcases.push({ input: input, output: output });
    
        // Save the updated testcase document
        await testcase.save();
    
        console.log('Input and output added successfully!');
    }catch(error)
    {
        console.error('Error adding input and output:', error.message);
    }
}

module.exports={
    addTestCase,
}