const {router}=require('./routes/routes.js');
const {DBconnection}=require('./database/db.js');
const {Problem}=require('./models/problem.js');
const {generateFile}=require('./generateFile');
const {executeCpp}=require('./executeCpp');
const {generateInputFile}=require('./generateInputFile');

const express=require('express');
const cors=require('cors');

const app=express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
 app.use('/',router);

DBconnection();

app.post("/run",async(req,res)=>{
    const {language ='cpp',code,input}=req.body;
    if(code===undefined){
       return res.status(404).json({success:false,error:"Empty code body!"});
    }
    const filePath=await generateFile(language,code);
    const inputFilePath=await generateInputFile(input,filePath);
    console.log(inputFilePath);
    const output =await executeCpp(filePath);
    console.log(output);
    res.json({output});
   
   });
   
app.listen(8000,()=>{
    console.log('server is running on port 8000');
});
