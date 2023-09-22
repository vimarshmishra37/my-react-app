import React from "react"

const Head = () => {
  const img = {
    imageUrl: 'https://imgs.search.brave.com/PLAtKlazQcXfq8oROIysS4XfHEhlSwmBkWZTT3Xxt9E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dC5icmFuZGZldGNo/LmlvL2lkRHZrbnNV/N0MvaWR3cVY1WUhv/eC5wbmc_dXBkYXRl/ZD0xNjM1ODkxODgw/NzQ0',
  
  };
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
        <div style={{display:"flex",flexDirection:"row",gap:"8px"}}>
          <img src={img.imageUrl} alt="logo" style={{height:"70px"}}/>
          <div className='logo'>
            <h1>AICTE</h1>
            <span>A unified portal for all your needs</span>
          </div>
          </div>
          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
            <i className='fab fa-instagram icon'></i>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
