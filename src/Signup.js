import React, { useState } from 'react';
import './Signup.css'; // Import your CSS file
import Appb from './app2';
const Signup = () => {
  // Create state variables for form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordC, setPasswordC] = useState('');
  const [selector, setSelector] = useState(''); // Changed state variable name
  // State to manage the error message
  const [errorMessage, setErrorMessage] = useState('');
  const [select_sign, setSelect_sign] = useState(false);
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== passwordC) {
      setErrorMessage('Passwords do not match. Please try again.');
    } else {
      // Clear the error message if passwords match
      setErrorMessage('');

      // Add your signup logic here
      // You can send the form data to your server or perform any other necessary actions

      // Navigate to the app.js file or any other desired route
      window.location.href = '/app';
    }
  };
  const handlesignup = () => {
    // Manipulate the URL to navigate back to the root of your app (e.g., /app)
    if(username===''||email===''||password===''||passwordC==='')
    {
      setErrorMessage('Enter all required fields you are asked to enter ');
    }
    else
    setSelect_sign(true);
  };
  // Function to handle the "Go Back" button click
  const handleGoBack = () => {
    // Manipulate the URL to navigate back to the root of your app (e.g., /app)
    window.location.href = '/app';
  };
if(select_sign)
{
  return(
    <div>
      <Appb/>
    </div>
  );
}
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
          <div className='upper'>
            <div className='form-group'>
              <label htmlFor='username_signup'>Username</label>
              <input
                type='text'
                id='username_signup'
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Enter UserName'
                required
              />
            </div>
            <div className='form-group' id='pac'>
              <label htmlFor='email_signup'>Email</label>
              <input
                type='email'
                id='email_signup'
                name='email'
                value={email}
                placeholder='Enter Email'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className='upper'>
            <div className='form-group'>
              <label htmlFor='password_signup'>Password</label>
              <input
                type='password'
                id='password_signup'
                name='password'
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className='form-group' id='pac'>
              <label htmlFor='passwordC_signup'>Confirm Password</label>
              <input
                type='password'
                id='passwordC_signup'
                placeholder='Enter Password'
                name='passwordC'
                value={passwordC}
                onChange={(e) => setPasswordC(e.target.value)}
                required
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='selector'>
            <label htmlFor='selector'>Role</label>
            <select
              id='selector'
              name='selector'
              value={selector}
              onChange={(e) => setSelector(e.target.value)}
              required
            >
              <option value="">Select an option</option>
              <option value="Administrator">Administrator</option>
              <option value="Educator">Educator</option>
              <option value="Developer">curriculum Developer</option>
            </select>
          </div>
          </div>

          {errorMessage && <p className='error-message'>{errorMessage}</p>}
          <div className='cen'>
            <button type='submit' className='submit_button_signup' onClick={handlesignup}>Sign Up</button>
            <button type='button' className="go-back-button_signup" onClick={handleGoBack}>Go Back</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
