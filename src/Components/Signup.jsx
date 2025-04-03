import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'; // Import the CSS file

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Handle signup logic here
    console.log({ firstname, lastname, email, password });
  };

  return (
    <div className="sign">
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Register </p>
        <div className="flex">
          <label>
            <input
              required
              placeholder=""
              type="text"
              className="input"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <span>Firstname</span>
          </label>

          <label>
            <input
              required
              placeholder=""
              type="text"
              className="input"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input
            required
            placeholder=""
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Email</span>
        </label>

        <label>
          <input
            required
            placeholder=""
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
        </label>
        <label>
          <input
            required
            placeholder=""
            type="password"
            className="input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span>Confirm password</span>
        </label>
        <button className="submit">Submit</button>
        <p className="signin">
          Already have an account? <Link to="/Login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
