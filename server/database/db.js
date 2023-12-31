// import mongoose from 'mongoose';
// import dotenv from'dotenv';

const dotenv=require('dotenv');
const mongoose=require('mongoose');
dotenv.config();

 const DBconnection=async()=>{ 
    const MONGO_URI=process.env.MONGODB_URL;
    try{
await mongoose.connect(MONGO_URI,{useNewUrlParser:true});
console.log("DB is connected successfully");
    }catch(error)
    {
        console.log("Error while connecting to DB",error.message);
    }
   
  
};


module.exports={
    DBconnection,
}