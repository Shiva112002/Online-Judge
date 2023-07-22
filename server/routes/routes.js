// import express from "express";
// import { addProblem } from "../controller/problem-controller.js";
// import { getProblems } from "../controller/getProblem-controller.js";
// import { getProblemByName } from "../controller/getProblemByName.js";

const express=require('express');
const {addProblem}=require('../controller/problem-controller.js');
const {getProblems}=require('../controller/getProblem-controller.js');
const { getProblemByName}=require('../controller/getProblemByName.js');

const router=express.Router();

router.post('/add',addProblem);
router.get('/problems',getProblems);
router.get('/problemName',getProblemByName);

module.exports={
    router,
}

