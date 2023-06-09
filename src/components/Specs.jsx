import React from 'react'

function Specs() {
  return (
    <section className='specifications'>
        <div className="container">
            <div className="headings">
                <h4>Plan your trip now</h4>
                <h1>Quick & easy car rental</h1>
            </div>
            <div className="specs">
                <div className='each-spec'>
                    <img src="assets/images/eachSpecs/selectCar.png" alt="" />
                    <h2>Select Car</h2>
                    <p>We offers a big range of vehicles for all your driving needs. 
                       We have the perfect car to meet your needs
                    </p>
                </div>
                <div className='each-spec'>
                <img src="assets/images/eachSpecs/operator.png" alt="" />
                    <h2>Contact Operator</h2>
                    <p>Our knowledgeable and friendly operators are always ready 
                        to help with any questions or concerns
                    </p>
                </div>
                <div className='each-spec'>
                <img src="assets/images/eachSpecs/drive.png" alt="" />
                    <h2 style={{marginTop: "1rem"}}>Let's Drive</h2>
                    <p>Whether you're hitting the open road, we've got you covered 
                        with our wide range of cars
                    </p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Specs
