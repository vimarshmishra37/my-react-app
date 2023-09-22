import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li>
              <Link to='/designing'>Designing</Link>
            </li>
            <li>
              <Link to='/Resources'>Resources</Link>
            </li>
            <li>
              <Link to='/collaborate'>Collaborate</Link>
            </li>

            <li>
              <Link to='/collaborate'>Analyse</Link>
            </li>

          </ul>
          <div className='start'>
            <div className='button'>LOGIN / SIGNUP</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
