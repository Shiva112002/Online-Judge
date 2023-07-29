const fs=require('fs');
const path=require('path');
const {v4: uuid}=require('uuid');

const dirActualOutputs=path.join(__dirname,'actualOutputs');

if(!fs.existsSync(dirActualOutputs)) {
    fs.mkdirSync(dirActualOutputs,{recursive:true});
}

const generateActualOutputFile=async(content,filepath,i)=>{
    const jobId=path.basename(filepath).split(".")[0];
    const filename=`${jobId}_${i}.txt`;
    const filePath=path.join(dirActualOutputs,filename);
    await fs.writeFileSync(filePath,content);
    return filePath;
};

module.exports={
    generateActualOutputFile,
};