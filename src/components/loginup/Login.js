import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

export function Login () {

  return (
    
        <div className='login-container'>
              <div className='login-box'>
                  <h1>Login Form</h1>
                  <div className='button-box'>
                      <Link className='link' to="/">
                                <button className='primary-btn'>
                                  Login
                                </button>
                      </Link >
                      <Link className='link' to="/signup">
                                <button className='secondary-btn'>
                                  Signup
                                </button>
                      </Link>
                  </div>
                  <form className='login-inputs'>
                    <input 
                    type="email" name="email" 
                    placeholder="Email Address"
                    ></input>
                  <div className='password'>
                      <input
                      type='password' name="password" 
                      placeholder='password'
                      id='password' 
                      required/>
                  </div>
                    <a href='#home'>Forgot password?</a>
                  <button  
                  type= 'submit'
                  className='primary-btn'>
                  Login
                  </button>
                  <p>Not a member?  <Link to="/signup">Signup</Link></p>
                  </form>

              </div>
        </div>
  
  )
}
