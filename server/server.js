import router from './routes/routes.js'
import DBconnection from './database/db.js'
import express from 'express';
import cors from 'cors';
import Problem from './models/problem.js';

const app=express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/',router);

DBconnection();

// Backend route handler
app.post('/', async (req, res) => {
    try {
      const requestData = req.body; // Assuming the request body contains the data you want to insert
      const { name, statement } = requestData;
  
      // Create a new document based on the Problem model
      const newProblem = new Problem({ name, statement });
  
      // Save the new document to the collection
      await newProblem.save();
  
      // Send a response back to the frontend indicating the successful insertion
      res.status(200).json({ message: 'Data inserted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
app.listen(8000,()=>{
    console.log('server is running on port 8000');
});
