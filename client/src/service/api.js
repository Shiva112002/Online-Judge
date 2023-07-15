import axios from 'axios';

const API_URI="http://localhost:8000";
export const addProblem=async (data) =>{
    try{
        const response=await axios.post(`${API_URI}/add`,data);
        return response.data;
    }catch(error)
    {
        console.log("Error while calling API",error.message);
    }
}

export const getProblems=async()=>{
    try{
        const response=await axios.get(`${API_URI}/problems`);
        return response.data;
    }
    catch(error)
    {
        console.log("Error while calling get problems API",error.message);
    }
}


export const getProblemByName = async (name) => {
    try {
        console.log(name);
      const response = await axios.get(`${API_URI}/problemName`, {
        params: { name: name },
      });
      return response.data;
    } catch (error) {
        console.log("Error while calling get problems by name API",error.message);
    }
  };