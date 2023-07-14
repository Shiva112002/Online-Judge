import axios from 'axios';

const API_URI="http://localhost:8000";
export const addProblem=async (data) =>{
    try{
        const response=await axios.post('http://localhost:8000',data);
        return response.data;
    }catch(error)
    {
        console.log("Error while calling API",error.message);
    }
}