import React, { useState } from 'react';
import './check.css';
import App from './App';
import Appa from './app1';
import Appb from './app2';
const Check = () => {
  const [selectedTab, setSelectedTab] = useState(null);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  if (selectedTab === 'educator' ) {
    return (
      <div>
        <App />
        
      </div>
    );
  }
    else if(selectedTab === 'developer')
    {
      return(
        <div>
          <Appa/>
        </div>
      );
    }
  else if(selectedTab === 'administrator')
  {
    return(
      <div>
        <Appb/>
      </div>
    );
  }
  return (
    <div className="check">
    
    
   
      {/* <div className="check"> Background image */}
     
      <div>
        
      <div className='header'>
      <img
    className="logo"
    src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/All_India_Council_for_Technical_Education_logo.png/220px-All_India_Council_for_Technical_Education_logo.png"
    alt="AICTE Logo"
  />
  <div className='portal'>
    <label className='AICTE'><b> AICTE</b></label>
    <br></br>
    <label className='y'>a unified portal for all your needs</label>
  </div>
  </div>
        <div className="background-image"> </div>
      </div>

      <div className="buttons">
        <div className="button-box">
          <button className="button orange" onClick={() => handleTabClick('educator')}>
            <b>EDUCATOR</b>
          </button>
        </div>
        <div className="button-box 2">
          <button className="button white" onClick={() => handleTabClick('developer')}>
            <b>Curriculum Developer</b>
          </button>
        </div>
        <div className="button-box 3">
          <button className="button green" onClick={() => handleTabClick('administrator')}>
            <b>Administrator</b>
          </button>
        </div>
      </div>
    </div>
   
  );
};

export default Check;
