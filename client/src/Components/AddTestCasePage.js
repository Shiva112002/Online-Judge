import React from 'react'
import { useState } from 'react'
import { TextareaAutosize } from '@mui/base';
import axios from 'axios';
import { TextField,Grid, Button, Paper} from '@mui/material';
import { addTestCase } from '../service/api';
import { useParams } from 'react-router-dom';

export default function AddTestCasePage() {
  const {problemId}=useParams();
  const [input,setInput]=useState('');
  const [output,setOutput]=useState('');
  const inputStyle={marginBottom:'2%',marginTop:'2%'}
  const handleCick=async()=>{
    const data={
      input:input,
      output:output,
      problemId:problemId
    };
    console.log(data);
    const response=await addTestCase(data);
    console.log(response);
  
    }
  return (
    <Grid>
    <TextField name="text" onChange={(e)=>{setInput(e.target.value)}} style={inputStyle} placeholder='Enter Input of Problem'/>
    <br></br>
    <TextareaAutosize onChange={(e)=>{setOutput(e.target.value)}} placeholder='Enter Ouput of Problem' fullwidth/>
    <br></br>
    <Button onClick={handleCick} color='primary' variant="contained" style={inputStyle}>ADD</Button>
    </Grid>
  )
}
