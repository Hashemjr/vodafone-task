import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditTask = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'To Do',
    dueDate: ''
  });

  useEffect(() => {
    
    axios.get(`/api/tasks/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(response => {
      setTask(response.data);
    })
    .catch(error => {
      console.error('There was an error fetching the task!', error);
    });
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/tasks/${id}`, task, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(() => {
      navigate('/tasks');  
    })
    .catch(error => {
      console.error('There was an error updating the task!', error);
    });
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" name="title" value={task.title} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={task.description} onChange={handleChange} className="form-control" required></textarea>
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select name="status" value={task.status} onChange={handleChange} className="form-control">
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div className="form-group">
          <label>Due Date:</label>
          <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
};

export default EditTask;
