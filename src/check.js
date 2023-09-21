import React, { useState } from 'react';
import './check.css';
import App from './App';

const Check = () => {
  const [selectedTab, setSelectedTab] = useState(null);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  if (selectedTab === 'educator' || selectedTab === 'developer' || selectedTab === 'administrator') {
    return (
      <div>
        <App />
        
      </div>
    );
  }

  return (
    <div className="check">
      {/* Background image */}
      <div>
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/All_India_Council_for_Technical_Education_logo.png/220px-All_India_Council_for_Technical_Education_logo.png"
          alt="AICTE Logo"
        />
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
