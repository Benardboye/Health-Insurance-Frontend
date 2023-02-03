import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './register.scss';
import { useAuth } from '../../components/context/authcontext';


const Register = () => {

  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { register } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
        register(formData);
    } catch (err) {
      toast.error(err.response.data.Error);
    }
  };
  return (
    <div>
      <div className='title-reg'>
        <h2>Create Account</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Name:</label>
          <input
            type="name"
            name="name"
            id="name"
            placeholder="enter your full name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter your email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="name">Phone:</label>
          <input
            type="phone"
            name="phone"
            id="phone"
            placeholder="enter your phone"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="enter your password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">
            Confirm: <br /> Password
          </label>
          <input
            type="password"
            name="confirm_password"
            id="confirmPassword"
            placeholder="confirm password"
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="btn-container">
            <button type="submit">Register</button>
          </div>
        </div>
      </form>
    </div>
    // </div>
  );
};

export default Register;
