import express from "express";
import { addProblem } from "../controller/problem-controller.js";

const router=express.Router();

router.post('/add',addProblem);

export default router;