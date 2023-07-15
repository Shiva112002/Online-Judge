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

app.listen(8000,()=>{
    console.log('server is running on port 8000');
});
