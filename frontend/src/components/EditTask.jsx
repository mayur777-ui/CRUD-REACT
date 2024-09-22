import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';



export default function EditTask() {
    const  USER_API_END_POINT = 'http://localhost:8000/Task';
    const navigate = useNavigate();
    const {id} = useParams();
    const [input,setinput] = useState({
        title:"",
        description:"",
    });
    
    useEffect(()=>{
      const fetch = async()=>{
        try{
          const response = await axios.get(`${USER_API_END_POINT}/showOne/${id}`);
          setinput({
            title: response.data.title,
            description:response.data.description,
          })
        }catch(err){
          console.log(err.message);
        }
      }
      fetch();
    },[]);
    const handlechange = (e)=>{
      let {name,value} = e.target;
      setinput({
          ...input,[name]:value
      });
  }
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                `${USER_API_END_POINT}/editTask/${id}`,
                input, 
                {
                    headers: {
                        'Content-Type': 'application/json', 
                    }
                }
            );
            setinput({
                title: "",
                description: "",
            });
            navigate('/');
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };
  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: '500px' }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Add New Task</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="task-title" className="form-label">
                Title
              </label>
              <input
                type="text"
                id="task-title"
                name="title"
                className="form-control"
                placeholder="Enter task title"
                value={input.title}
                onChange={handlechange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="task-description" className="form-label">
                Description
              </label>
              <textarea
                id="task-description"
                name="description"
                className="form-control"
                placeholder="Enter task description"
                value={input.description}
                onChange={handlechange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

