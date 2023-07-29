// import mongoose from "mongoose";
const mongoose=require('mongoose');
 
const ProblemSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
statement:{
    type:String,
    required:true
},
});

const TestcaseSchema = new mongoose.Schema({
    problemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Problem',
      required: true,
    },
    testcases: {
      type: [
        {
          input: {
            type: String,
            required: true,
          },
          output: {
            type: String,
            required: true,
          },
        },
      ],
      required: true,
    },
  });
  

  
  // Create the Testcase model
  

 const Problem=mongoose.model('problem',ProblemSchema);
 const Testcase = mongoose.model('Testcase', TestcaseSchema);

module.exports={
    Problem,
    Testcase,
}