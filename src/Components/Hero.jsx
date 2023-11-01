import React from 'react'

const Hero = () => {
  return (
    <main className='hero container'>
        <div className='hero-content'>
            <h1> YOUR FEET DESERVE THE BEST</h1>
            <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE
             TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND
             WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>
            <div className='hero-btn'>
              <button>SHope NoW</button>
              <button className='sec-btn'>Categery</button>
            </div>
            <div className='shopping'>
              <p>Also Available</p>
              <div  className='brand-icons'>
                <img src="/Image/amazon.png" alt="amazon-logo"/>
                <img src="/Image/flipkart.png" alt="filpkart-logo"/>
              </div>
             
            </div>
        </div>
        <div className='hero-image'> 
        <img src='/Image/shoe_image.png' alt="hero-image"/>
         </div>
    </main>
  )
}

export default Hero