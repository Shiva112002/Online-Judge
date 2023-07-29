import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProblemById } from '../service/api';
import { styled } from '@mui/material/styles';
import { TextField, Grid, Button } from '@mui/material';
import axios from 'axios';

export default function ProblemPage() {
    const {problemId}=useParams();
    const [problem,setProblem]=useState({name:"",statement:""});
    const [code,setCode]=useState('');
    const [input,setInput]=useState('');
    const [output,setOuput]=useState('');
    useEffect(()=>{
       const getProblem=async()=>{
            // console.log(problemName);
              const response=await getProblemById(problemId);
              console.log(response);
              setProblem(response);
       }
       getProblem();
    },[])
    const handleRun=async () =>{
      const payload={
        language:"cpp",
        code,
        input
      }
      try{
        const {data}=await axios.post('http://localhost:8000/run',payload)
        console.log(data);
        setOuput(data.output);
      }catch(error){
        console.log(error.message);
      }
    }
    console.log(code);
    const handleSubmit=async () =>{
      const payload={
        language:"cpp",
        code,
        problemId,
      }
      try{
        const {data}=await axios.post('http://localhost:8000/submit',payload)
        console.log(data);
        setOuput(data.output);
      }catch(error){
        console.log(error.message);
      }
    }
  return (
    <div>
    <Grid container spacing={2} style={{padding:'4%'}}>
    <Grid item xs={6}>
    <h1>{problem.name}</h1>
    <p>{problem.statement}</p>
    </Grid>
    <Grid item xs={6}>
     <Grid item xs={12}>
     <TextField
        label="Write your code here"
        multiline
        rows={20}
        cols={10}
        variant="outlined"
        fullWidth
        onChange={(e)=>setCode(e.target.value)}
      />
     </Grid>
      
      <Grid item xs={6}>
      <TextField
        label="Custom Input"
        multiline
        rows={4}
        variant="outlined"
        onChange={(e)=>setInput(e.target.value)}
        style={{marginTop:'2%'}}
      />
      </Grid>
      <Grid item xs={6} style={{marginTop:'2%'}}>
      <Button variant="contained" color="primary" onClick={handleRun}>
        Run
      </Button>
      <Button variant="contained" color="primary" style={{ marginLeft: '8px' }} onClick={handleSubmit}>
        Submit
      </Button>
      </Grid>
     {output && <p>{output}</p>}
    </Grid>

    </Grid>
        </div>
  )
}
