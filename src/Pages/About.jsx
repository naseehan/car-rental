import React from 'react'
import Banner from '../components/Banner'
import HeroPages from '../components/HeroPages'
import Specs from '../components/Specs'
import "../stylePages/aboutStyles/App.css"

function About() {
  return (
    <section className="about-section">
        <HeroPages name="About"/>
        <div className="container">
          <div className="about-company">
            <div className="company-img">
              <img src="assets/images/About/about-main.jpg" alt="" />
            </div>
            <div className="company-text">
              <p>About Company</p>
              <h1>You start the engine and your adventure begins</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, error quae! Corporis dolores,
                 illo a maiores nam facere,
                 impedit ullam, enim aperiam necessitatibus hic animi. Labore recusandae dolorum suscipit rem?</p>
              <div className="company-outlets">
                <div className='buildings'>
                  <img src="assets/images/About/type.png" alt="" />
                  <span>
                    <h4>20</h4>
                    <p>Car Types</p>
                  </span>
                </div>
                <div className='buildings'>
                  <img src="assets/images/About/outlet.png" alt="" />
                  <span>
                    <h4>33</h4>
                    <p>Rental Outlets</p>
                  </span>
                </div>
                <div className='buildings'>
                  <img src="assets/images/About/repair.png" alt="" />
                  <span>
                    <h4>69</h4>
                    <p>
                        Repair Shop
                    </p>
                  </span>
                </div>
                

              </div>
            </div>
          </div>
        </div>
        <Specs />
        <Banner />
    </section>
  )
}

export default About