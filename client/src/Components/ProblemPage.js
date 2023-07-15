import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProblemByName } from '../service/api';

export default function ProblemPage() {
    const {problemName}=useParams();
    const [problem,setProblem]=useState({name:"",statement:""});
    useEffect(()=>{
       const getProblem=async()=>{
            // console.log(problemName);
              const response=await getProblemByName(problemName);
              console.log(response);
              setProblem(response);
       }
       getProblem();
    },[])
  return (
    <div>
<h1>{problem.name}</h1>
<p>{problem.statement}</p>
    </div>
  )
}
