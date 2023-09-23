// fp.js
import React, { useState } from 'react';
import './App.css'; // Make sure to import the CSS file for styling
import './fp.css';

const ForgotPassword = () => {
  // State to store the user's email
  const [email, setEmail] = useState('');

  // State to manage error messages
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle email input changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Function to handle form submission (request password reset)
  const handleRequestPasswordReset = () => {
    // Add your password reset request logic here
    // You can send the email to your server for further processing

    // For this example, we'll just show a success message
    alert(`Password reset requested for email: ${email}`);

    // Optionally, redirect the user to a success page or back to the login page
    window.location.href = '/login'; // Redirect to the login page
  };

  return (
    <div className="app">
      {/* Background image */}
      <div>
        <div className="backgroundimage"> </div>
      </div>

      <div className='cont'>
        <div className='headerA'>
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
        <div className="forgot-password-container">
          <div className="forgot-password-form">
            <h1>Forgot Password</h1>
            <div className="inputcontainer">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email_forgot"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            {errorMessage && (
              <p className="error-message">{errorMessage}</p>
            )}
            <button className="reset-password-button" onClick={handleRequestPasswordReset}>
              Request Password Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
