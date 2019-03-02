import React from 'react';
import Hero from '../img/hero/contact.jpg'
import { Carousel } from 'react-responsive-carousel';

const Contact = () => {
  return (
    <div className="view view--contact">
      <div className="hero">
        <Carousel>
          <div>
            <img src={Hero} alt="Contact Coghill" />
            <p className="legend">Contact</p>
          </div>
        </Carousel>
      </div>
      <div className="container">
        <section className="section">
          <h1>Get in touch!</h1>
          <h2>Contact us and stuff...</h2>
          <h3></h3>
        </section>
      </div>
    </div>
  )
}

export default Contact