import React, { useState } from 'react';
import Appa from './app1';

const SignupForm = ({ onSubmit, onCancel }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [designation, setDesignation] = useState('');
  const [institute, setInstitute] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [select_sign, setSelect_sign] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  const handlesignup = () => {
    // Manipulate the URL to navigate back to the root of your app (e.g., /app)
    if(fullName===''||email===''||contactNumber===''||designation===''||institute==='')
    {
      setErrorMessage('Enter all required fields you are asked to enter ');
    }
    else if(contactNumber.length!=10)
    setErrorMessage('Enter Valid  Phone Number ');
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
      <Appa/>
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
            <label htmlFor='username_signup'>Fullname</label>
            <input
              type='text'
              id='username_signup'
              name='username'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder='Enter FullName'
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
            <label htmlFor='password_signup'>contact Number</label>
            <input
              type='number'
              id='password_signup'
              name='password'
              placeholder='Enter Contact Number'
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
          </div>
          <div className='form-group' id='pac'>
            <label htmlFor='passwordC_signup'>Designation</label>
            <input
              type='text'
              id='passwordC_signup'
              placeholder='Enter Designation'
              name='passwordC'
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='form-group'>
          <div className='institute'>
          <label htmlFor='selector'>Institute</label>
          <input
              type='text'
              id='institute_signup'
              placeholder='Enter Institute'
              name='passwordC'
              value={institute}
              onChange={(e) => setDesignation(e.target.value)}
              required
            />
            
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

export default SignupForm;
