// import { Router } from "express";
import express from 'express';
import {addTask, deleteTask, editTask, showone, showTask} from'../controllers/task.controllers.js';
const router = express.Router({mergeParams:true});

router.route('/addtask').post(addTask);
router.route('/edittask/:id').put(editTask);
router.route('/deleteTask/:id').delete(deleteTask);
router.route('/showTask').get(showTask);
router.route('/showOne/:id').get(showone);
// router.get('/',(req,res)=>{
//     res.send('Task');
// })
export default router;