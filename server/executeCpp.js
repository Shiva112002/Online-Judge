const {exec} =require('child_process');
const fs=require('fs');
const path=require('path');
const { stdout, stderr } = require('process');
const { fileURLToPath } = require('url');
const {v4: uuid}=require('uuid');

const outputPath=path.join(__dirname,'outputs');

if(!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath,{recursive:true});
}

const executeCpp=(filepath,i)=>{
  const jobId=path.basename(filepath).split(".")[0];
  const outPath=path.join(outputPath,`${jobId}_${i}.exe`)
  return new Promise((resolve,reject)=>{
  exec(
    `g++ ${filepath} -o ${outPath} && cd ${outputPath} && .\\${jobId}_${i}.exe <..\\inputs\\${jobId}_${i}.txt`,
    (error,stdout,stderr)=>{
        if(error){
            reject({error,stderr});
        }
        if(stderr){
            reject(stderr);
        }
        resolve(stdout);
    }
  );

  });
};

module.exports={
    executeCpp,
}