import React, { useState } from 'react';
import './App.css'; // You can create and import your own CSS for styling
import Check from './check';

function App() {
    const img={
        "url1":"https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        "url2":"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        "url3":"https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        "url4":"https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
      }
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

      <footer className='about'>
      <h2 className="start1">ABOUT US</h2>
      <br/>
      <div className="card-container">
        <div className="card">
          <img src={img.url1} alt="Card 1" />
          <h3>DESIGN</h3>
          <p>Offer intuitive tools and templates for curriculum design.</p>
        </div>
        <div className="card">
          <img src={img.url2} alt="Card 2" />
          <h3>RESOURCES</h3>
          <p>A repository of educational resources, such as textbooks, articles, videos.</p>
        </div>
        <div className="card">
          <img src={img.url3} alt="Card 3" />
          <h3>ANALYSE</h3>
          <p>Provide analytics and reporting features to track and analyze the effectiveness of curriculum designs.</p>
        </div>
        <div className="card">
          <img src={img.url4} alt="Card 4" />
          <h3>COLLABORATE</h3>
          <p>Allows users to invite others to review and provide feedback on their curriculum designs.</p>
      
        </div>
      </div>
      <section className='notify'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Stay Updated!</h1>
            <span className="sub">Be the first one to know if we move things around a bit.</span>
          </div>
          <div className='right row'>
            
            <input type='email'className='inp' placeholder='Enter email address' />
            <i className='fa fa-paper-plane z'></i>
          </div>
        </div>
      </section>
      </footer>
    </div>
  );
}

export default App;
