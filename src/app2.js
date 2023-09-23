import React, { useState } from 'react';
import './App.css';
import Signup from './Signup'; // Import the Signup component
import ForgotPassword from './fp';
const Appb = () => {
  const validCredentials = {
    loginId: 'vimarshmishra',
    password: 'omar123',
  };

  // State to store form input values
  const [formData, setFormData] = useState({
    loginId: '',
    password: '',
  });

  // State to manage authentication status and error message
  const [authenticated, setAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // State to control the rendering of the Signup component
  const [showSignup, setShowSignup] = useState(false);
  const [showforgot, setShowforgot] = useState(false);
  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission and authentication
  const handleLogin = () => {
    // Check if the entered credentials match the valid credentials
    if (
      formData.loginId === validCredentials.loginId &&
      formData.password === validCredentials.password
    ) {
      // Redirect to landing_page.html on successful login
      window.location.href = 'landing_page.html';
    } else {
      setFormData({
        ...formData,
        password: '', // Clear the password input
      });
      setAuthenticated(false);
      setErrorMessage('Credentials do not match.'); // Set the error message
    }
  };
  const handleforgot = () => {
    setShowforgot(true); // Show the Signup component
  };
  if (showforgot) {
    return (<div><ForgotPassword /></div>);
  }
  // Function to handle signup button click and render Signup component
  const handleSignupClick = () => {
    setShowSignup(true); // Show the Signup component
  };

  // Conditional rendering based on showSignup state
  if (showSignup) {
    return <Signup />;
  }

  return (
    <div className="app">
      {/* Background image */}
      <div>
        <div className="background-image"> </div>
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
        <div className="login-container">
          <div className="login-form">
            {authenticated ? (
              <p className="welcome-message">Welcome, {validCredentials.loginId}!</p>
            ) : (
              <div>
                <h1>Administrator <br></br> Login</h1>
                <div className="input-container">
                  <label htmlFor="loginId">Login ID:</label>
                  <input
                    type="text"
                    id="loginId"
                    name="loginId"
                    value={formData.loginId}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-container">
                <label htmlFor="password">Password: <button className="forgot" onClick={handleforgot}>
                  forgot password
                </button></label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={errorMessage ? 'password-error' : ''}
                  />
                  {errorMessage && (
                    <p className="error-message" >{errorMessage}</p>
                  )}
                </div>
                <button className="signup-button" onClick={handleSignupClick}>
                  NEW USER? SIGNUP
                </button>
                <br></br>
                <br></br>
               
                <button className="login-button" onClick={handleLogin}>
                  Login
                </button>
                <button className="go-back-button" onClick={() => window.location.href = 'index.html'}>
              Go Back
            </button>
                
              </div>
            )}

            {/* "Go Back" button */}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appb;
