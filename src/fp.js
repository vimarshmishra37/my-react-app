import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate a password reset request (replace with actual API call)
    try {
      // Replace this with your backend API endpoint for password reset
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 200) {
        setMessage('Password reset instructions sent to your email.');
      } else {
        setMessage('Password reset failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    

    <div className="forgot">
    <div>
        <div className='backgroundimage'></div>
      </div>
    <div className="forgot-password">
      
      <div className='headerA'>
      <img
    className="logoA"
    src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/All_India_Council_for_Technical_Education_logo.png/220px-All_India_Council_for_Technical_Education_logo.png"
    alt="AICTE Logo"
  />
  <div className='portalA'>
    <label className='AICTEA'><b> AICTE</b></label>
    <br></br>
    <label className='note'>a unified portal for all your needs</label>
  </div>
  </div>
      <h3 className="fpp">Forgot Password?</h3>
      <form onSubmit={handleSubmit}>
        <label>
        <div className="enteremail">
          Enter the Email Address associated with your account:
          </div>
          <div className="email">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            
          />
          </div>
        </label>
        <button type="submit">Reset Password</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
    </div>
  );
}

export default ForgotPassword;
