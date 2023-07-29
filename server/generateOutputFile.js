const fs=require('fs');
const path=require('path');
const {v4: uuid}=require('uuid');

const dirtestOutputs=path.join(__dirname,'testOutputs');

if(!fs.existsSync(dirtestOutputs)) {
    fs.mkdirSync(dirtestOutputs,{recursive:true});
}

const generateTestOutputFile=async(content,filepath,i)=>{
    const jobId=path.basename(filepath).split(".")[0];
    const filename=`${jobId}_${i}.txt`;
    const filePath=path.join(dirtestOutputs,filename);
    await fs.writeFileSync(filePath,content);
    return filePath;
};

module.exports={
generateTestOutputFile,
};