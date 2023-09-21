import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './LoginPage'; // Import your login page component
import LandingPage from './LandingPage'; // Import your landing page component

function redirect() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/landing_page" component={LandingPage} />
        {/* Redirect to '/' if any other URL is accessed */}
       
      </Switch>
    </Router>
  );
}

export default redirect;
