import mongoose from "mongoose";

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

const Problem=mongoose.model('problem',ProblemSchema);
export default Problem;