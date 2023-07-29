
// const axios=require('axios');
// const API_URI="http://localhost:8000";
// const addProblem=async (data) =>{
//     try{
//         const response=await axios.post(`${API_URI}/add`,data);
//         return response.data;
//     }catch(error)
//     {
//         console.log("Error while calling API",error.message);
//     }
// }

// const getProblems=async()=>{
//     try{
//         const response=await axios.get(`${API_URI}/problems`);
//         console.log(response.data)
//         return response.data;
//     }
//     catch(error)
//     {
//         console.log("Error while calling get problems API",error.message);
//     }
// }


// const getProblemByName = async (name) => {
//     try {
//         console.log(name);
//       const response = await axios.get(`${API_URI}/problemName`, {
//         params: { name: name },
//       });
//       return response.data;
//     } catch (error) {
//         console.log("Error while calling get problems by name API",error.message);
//     }
//   };

//  const addTestCase=async(data)=>{
//     try
//     {
//       console.log(data);
//       const response=await axios.post(`${API_URI}/addTestCase`,data);
//     return response.data;
//     }catch(error){
//         console.log("Error while calling addTestCase API",error.message);
//     }
//   };

//   module.exports={
//     addProblem,
//     getProblems,
//     getProblemByName,
//     addTestCase,
//   }
import axios from "axios";
const API_URI = "http://localhost:8000";

export const addProblem = async (data) => {
  try {
    const response = await axios.post(`${API_URI}/add`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling addProblem API", error.message);
  }
}

export const getProblems = async () => {
  try {
    const response = await axios.get(`${API_URI}/problems`);
    console.log("Problems retrieved successfully:", response.data);
    return response.data;
  } catch (error) {
    console.log("Error while calling getProblems API", error.message);
  }
}

export const getProblemById = async (problemId) => {
  try {
    const response = await axios.get(`${API_URI}/problemId`, {
      params: { problemId: problemId },
    });
    console.log("Problem by Id retrieved successfully:", response.data);
    return response.data;
  } catch (error) {
    console.log("Error while calling getProblemById API", error.message);
  }
};

export const addTestCase = async (data) => {
  try {
    console.log("Adding test case:", data);
    const response = await axios.post(`${API_URI}/addTestCase`, data);
    console.log("Test case added successfully:", response.data);
    return response.data;
  } catch (error) {
    console.log("Error while calling addTestCase API", error.message);
  }
};

// module.exports = {
//   addProblem,
//   getProblems,
//   getProblemByName,
//   addTestCase,
// };
