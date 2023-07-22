import React, { useEffect, useState } from 'react'
import { getProblems } from '../service/api'
import { Link } from '@mui/material'

export default function Problems() {
  const [problemList,setProblemList]=useState([]);
  useEffect(()=>{
    const list=async()=>{
    const response=await getProblems();
    setProblemList(response);
    }
    list();
  },[])
  return (
    <div>
      <h1>Problems</h1>
      {
        problemList.map((problem)=>
        {
          const link=`/problems/${problem.name}`;

          return <div>
          <Link href={link} underline="hover">{problem.name}</Link>
          </div>
          })}
    </div>
  )
}
