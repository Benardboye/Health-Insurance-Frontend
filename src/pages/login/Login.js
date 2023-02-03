import React, { useState } from 'react';
import { useAuth } from '../../components/context/authcontext';


const Login = () => {
    const {login} = useAuth()
const [formdata, setFormData] =useState({})

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formdata, [name]:value})
  };


  const handleSubmit = (e) => {
    e.preventDefault()
    login(formdata)
  };

  return (
    <div>
        <div className='title-reg'>
        <h2>Login</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
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
            <div></div>
            <div className="btn-container">
              {/* <button type="submit"><Link to="/register" className="link">Register</Link></button> */}
              <button type="submit">Login</button>
            </div>
          </div>
          
        </form>
        <div className="account">
            Don&apos;t have an account? &nbsp;
            <a href={'/register'}>Register</a>
          </div>
      </div>
    </div>
  );
};

export default Login;
