import React from 'react'
import { useState } from 'react'
import { TextareaAutosize } from '@mui/base';
import axios from 'axios'
import { TextField,Grid, Button, Paper} from '@mui/material';
import { addProblem } from '../service/api';

export default function Author() {
  const [title,setTitle]=useState('');
  const [prob,setProb]=useState('');
  const inputStyle={marginBottom:'2%',marginTop:'2%'}
  const handleCick=async()=>{
  const data={
    name:title,
    statement:prob
  };
  console.log(data);
  const response=await addProblem(data);
  console.log(response);

  }
  return (
    
        <Grid>
        <TextField name="text" onChange={(e)=>{setTitle(e.target.value)}} style={inputStyle} placeholder='Enter Title of Problem'/>
        <br></br>
        <TextareaAutosize onChange={(e)=>{setProb(e.target.value)}} placeholder='Enter Statement of Problem' fullwidth/>
        <br></br>
        <Button onClick={handleCick} color='primary' variant="contained" style={inputStyle}>ADD</Button>
        </Grid>
      
  )
}
