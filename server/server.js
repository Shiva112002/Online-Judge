const {router}=require('./routes/routes.js');
const {DBconnection}=require('./database/db.js');
const {Problem}=require('./models/problem.js');
const {generateFile}=require('./generateFile');
const {executeCpp}=require('./executeCpp');
const {generateInputFile}=require('./generateInputFile');
const {Testcase}=require('./models/problem.js');
const {generateTestOutputFile}=require('./generateOutputFile.js');
const fs = require('fs');
const { promisify } = require('util');
const {generateActualOutputFile}=require('./generateActualOutput.js');
const readFileAsync = promisify(fs.readFile);


const express=require('express');
const cors=require('cors');

const app=express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
 app.use('/',router);

DBconnection();

function parseInputs(inputString) {
    const regex = /(?:\w+=)"([^"]+)"|\w+=(\d+)/g;
    const parsedInputs = [];
  
    let match;
    while ((match = regex.exec(inputString))) {
      const value = match[1] || parseInt(match[2]);
      parsedInputs.push(value);
    }
  
    return parsedInputs.join(' ');
  }
//   function normalizeLineEndings(str) {
//     return str.replace(/\r\n|\r|\n/g, '\n');
//   }
app.post("/run",async(req,res)=>{
    const {language ='cpp',code,input}=req.body;
    if(code===undefined){
       return res.status(404).json({success:false,error:"Empty code body!"});
    }
    const filePath=await generateFile(language,code);
    const inputFilePath=await generateInputFile(input,filePath,0);
    console.log(inputFilePath);
    const output =await executeCpp(filePath,0);
    const outputFilePath=await generateTestOutputFile(output,filePath);

    console.log(output);
    res.json({output});
   
   });
   const { normalizeLineEndings } = require('./helpers'); // Assuming the helper function to normalize line endings is available

   app.post("/submit", async (req, res) => {
       try {
           const { language = 'cpp', code, problemId } = req.body;
           if (code === undefined) {
               return res.status(404).json({ success: false, error: "Empty code body!" });
           }
   
           const filePath = await generateFile(language, code);
           const testCase = await Testcase.findOne({ problemId });
           const testCasesCount = testCase.testcases.length;
   
           for (let i = 0; i < testCasesCount; i++) {
               try {
                   const test = testCase.testcases[i];
                   const inputs = parseInputs(test.input);
   
                   const inputFilePath = await generateInputFile(inputs, filePath, i + 1);
                 
                   const output = await executeCpp(filePath, i + 1);
                   const outputFilePath = await generateTestOutputFile(output, filePath, i + 1);
                   console.log(outputFilePath);
   
                   const actual = parseInputs(test.output);
                   const actualFilePath = await generateActualOutputFile(actual, filePath, i + 1);
                   console.log(actualFilePath);
   
                   const content1 = fs.readFileSync(actualFilePath, 'utf8');
                   const content2 = fs.readFileSync(outputFilePath, 'utf8');
   
                   const normalizedContent1 = normalizeLineEndings(content1).trim();
                   const normalizedContent2 = normalizeLineEndings(content2).trim();
   
                   if (normalizedContent1 !== normalizedContent2) {
                       console.log("c1=" + normalizedContent1);
                       console.log("c2=" + normalizedContent2);
                       console.log(`testcase failed:${i + 1}`);
                       res.json("Rejected");
                       return; // Stop processing other test cases if one is rejected
                   }
               } catch (error) {
                   console.error('An error occurred:', error);
               }
           }
   
           res.json("Accepted");
       } catch (error) {
           console.error('An error occurred:', error);
       }
   });
   


app.listen(8000,()=>{
    console.log('server is running on port 8000');
});
