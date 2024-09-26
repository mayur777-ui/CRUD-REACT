import express from 'express';
import main from './db.js';
import taskRouter from './routers/task.router.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: false }))

app.use(cors());

app.use(express.json())
app.use('/Task', taskRouter);

const port =  process.env.PORT || 4000;

app.get('*',(req,res)=>{
    res.send("hello");
})
app.listen(port,(req,res)=>{
    console.log('server is running on port 8000');
    main();
}) 
