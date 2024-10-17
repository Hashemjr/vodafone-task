import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  console.log("Component Rendered"); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { email, password });
    axios.post('http://localhost:8080/api/auth/register', { email, password })
      .then(response => alert('Registration successful'))
      .catch(error => console.error('There was an error!', error));
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
        <button onClick={() => console.log("Button clicked")} className="btn btn-primary">Test Button</button>
      </form>
    </div>
  );
};

export default Register;
