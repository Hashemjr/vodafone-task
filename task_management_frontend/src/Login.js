import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/auth/login', { email, password })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        navigate('/tasks'); 
      })
      .catch(error => console.error('There was an error!', error));
  };

  const handleRegisterRedirect = () => {
    navigate('/register');  
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <div className="mt-3">
        <p>New user? <button onClick={handleRegisterRedirect} className="btn btn-link">Register here</button></p>
      </div>
    </div>
  );
};

export default Login;
