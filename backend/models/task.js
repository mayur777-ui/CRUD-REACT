import mongoose from "mongoose";
import {Schema} from "mongoose";

const taskSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    created_at: {
        type: Date,
        default: Date.now,
    }
});

const Task = mongoose.model("Task",taskSchema);

export default Task;