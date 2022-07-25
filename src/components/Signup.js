import React from 'react';
import {Link} from 'react-router-dom';


export const Signup = () => {
  return (
    <div className='signin-container'>
        <div className='signin-box'>
            <h1>Signup Form</h1>
            <div className='button-box'>
                    <Link className='link' to="/">
                        <button className='secondary-btn'>
                        Login
                        </button>
                    </Link>
                    <Link className='link' to="/signup">
                        <button className='primary-btn'>
                          Signup
                        </button>
                    </Link>
                  </div>
            <form className='signin-inputs' >
                  <input 
                  type="text" name="firstname" 
                  placeholder='firstname' 
                  id='firstname'
                 required/>
                  <input
                  type="text" name="lastname" 
                  placeholder='lastname'
                  id='lastname' 
                 required/>
                  <input
                  type="email" name="email" 
                  placeholder="email" 
                  id='email'
                 required/>
                  <div className='password'>
                      <input
                      type="password" name="password" 
                      placeholder='password'
                      id='password' 
                     required/>
                  </div>
                  <button 
                  type="submit"
                  className='primary-btn'>
                  Signup
                  </button>
                  <a href='#home'>Forgot password?</a>
                <p>Already a member? <Link to="/">Login</Link></p>
            </form>

        </div>
</div>
  )
}