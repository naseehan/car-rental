import React from 'react'

function Intro() {
  return (
   <section className='home-section'>
    <div className="container">
        <img src="assets/images/intro/intro-bg.png" className='intro-bg' alt="bg-img" />
   

<div className="home">
    <div className="intro-text">
        <h4>Plan your trip now</h4>
        <h1>Save big with our car rental</h1>
        <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
        <div className="intro-buttons">
            <button className='book-ride'>Book a Ride</button>
            <button className='learn-more'>Learn More</button>
        </div>
        </div>
   
            <img src="assets/images/intro/mustang.png" alt="" className='car-image'/>

    </div>
    </div>
   </section>
  )
}

export default Intro

