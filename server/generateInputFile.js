const fs=require('fs');
const path=require('path');
const {v4: uuid}=require('uuid');

const dirInputs=path.join(__dirname,'inputs');

if(!fs.existsSync(dirInputs)) {
    fs.mkdirSync(dirInputs,{recursive:true});
}

const generateInputFile=async(content,filepath)=>{
    const jobId=path.basename(filepath).split(".")[0];
    const filename=`${jobId}.txt`;
    const filePath=path.join(dirInputs,filename);
    await fs.writeFileSync(filePath,content);
    return filePath;
};

module.exports={
generateInputFile,
};