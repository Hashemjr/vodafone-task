import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/tasks', { title, description, status, dueDate }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(() => navigate('/tasks'))
    .catch(error => console.error('There was an error!', error));
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)} required></textarea>
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select className="form-control" value={status} onChange={e => setStatus(e.target.value)}>
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
        </div>
        <div className="form-group">
          <label>Due Date:</label>
          <input type="date" className="form-control" value={dueDate} onChange={e => setDueDate(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Create Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
