import React, { useEffect, useState } from 'react'
import { getProblems } from '../service/api'
import { Link } from '@mui/material'

export default function AddTestCase() {
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
            console.log(problem);
            const link=`/addTestcase/${problem._id}`;
  
            return <div>
            <Link href={link} underline="hover">{problem.name}</Link>
            </div>
            })
         }
      </div>
    )
}
