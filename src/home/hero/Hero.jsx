import React from "react"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            
            <h1>WELCOME TO UNIFY!</h1>
            <br/>

            <span>A Collaborative tool for curriculum designing.</span>
            <div >
              <button className="btn1">
                GET STARTED NOW !!
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
