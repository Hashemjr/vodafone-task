import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/api/tasks', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(response => {
      setTasks(response.data);
    })
    .catch(error => {
      console.error('There was an error fetching the tasks!', error);
    });
  }, []);

  const deleteTask = (id) => {
    axios.delete(`/api/tasks/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(() => {
      setTasks(tasks.filter(task => task.id !== id));  
    })
    .catch(error => {
      console.error('There was an error deleting the task!', error);
    });
  };

  return (
    <div className="col-md-8 offset-md-2">
      <h2>Task List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
              <td>
                <Link to={`/tasks/edit/${task.id}`} className="btn btn-warning btn-sm">Edit</Link>
                <button onClick={() => deleteTask(task.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/tasks/create" className="btn btn-primary">Create New Task</Link>
    </div>
  );
};

export default TaskList;
