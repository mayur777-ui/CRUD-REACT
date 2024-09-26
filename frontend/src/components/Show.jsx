import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/show.css';

export default function Show() {
    const [tasks, setTask] = useState([]);
    const USER_API_END_POINT = 'https://crud-react-fqzp.onrender.com/Task';
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(`${USER_API_END_POINT}`);
                setTask(response.data);
            } catch (err) {
                console.error(err.message);
            }
        };
        fetchTasks();
    }, []);

    const handleEdit = (id) => {
        navigate(`/editTask/${id}`);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${USER_API_END_POINT}/deleteTask/${id}`);
            setTask(tasks.filter(task => task._id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const handleAddTask = () => {
        navigate('/addTask');
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Task List</h2>
            <div className="row">
                {tasks.map(task => (
                    <div className="col-md-4 mb-4" key={task._id}>
                        <div className="card shadow-sm border-light">
                            <div className="card-body">
                                <h5 className="card-title">{task.title}</h5>
                                <p className="card-text">{task.description}</p>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-warning me-2" onClick={() => handleEdit(task._id)}>
                                        Edit
                                    </button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(task._id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-4">
                <button className='btn btn-primary btn-lg' onClick={handleAddTask}>Add Task</button>
            </div>
        </div>
    );
}
