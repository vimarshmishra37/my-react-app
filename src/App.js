import React, { useState } from 'react';
import './App.css'; // You can create and import your own CSS for styling
import Check from './check';

function App() {
    const [showforgot, setShowforgot] = useState(false);
    const handleforgot = () => {
        setShowforgot(true); // Show the Signup component
      };
    if(showforgot)
    {
       return(<div><Check/></div>) 
    }
  return (
    <div className="App">
        <div>
            <div className='background-imageL'></div>
        </div>
      <header>
        <h1>My Website</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><button onClick={handleforgot}>hello</button></li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2>Welcome to My Website</h2>
          <p>This is the main content of the website.</p>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} My Website</p>
      </footer>
    </div>
  );
}

export default App;
