import React, { useState } from 'react';
import './Signup.css'; // Import your CSS file

const Signup = () => {
  // Create state variables for form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    // You can send the form data to your server or perform any other necessary actions
  };

  // Function to handle the "Go Back" button click
  const handleGoBack = () => {
    // Manipulate the URL to navigate back to the root of your app (e.g., /app)
    window.location.href = '/app';
  };

  return (
    
    <div className='Signup background-image'>
        <div className='signup_logo'>
            <div className='signup_log'>
                <img
                className="logoA"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/All_India_Council_for_Technical_Education_logo.png/220px-All_India_Council_for_Technical_Education_logo.png"
                alt="AICTE Logo" 
                />
                <div className='portalA'>
            <label className='AICTEA'><b> AICTE</b></label>
            <br></br>
            <label className='x'>a unified portal for all your needs</label>
          </div>
            </div>
        </div>
      <div className='signup-container'>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='username_signup'>Username</label>
            <input
              type='text'
              id='username_signup'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email_signup'>Email</label>
            <input
              type='email'
              id='email_signup'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor=' password'>Password</label>
            <input
              type='password'
              id='password_signup'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='cen'>
            <button type='submit'>Sign Up</button>
            <button type='button'className="go-back-button_signup" onClick={handleGoBack}>Go Back</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
