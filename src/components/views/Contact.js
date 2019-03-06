import React from 'react';
import Hero from '../../img/hero/contact.jpg'
import { Carousel } from 'react-responsive-carousel';

const Contact = () => {
  return (
    <div className="view view--contact">
      <div className="hero">
        <Carousel>
          <div>
            <img src={Hero} alt="Contact Coghill" />
            <p className="legend"><a href="tel:+6478665115">Give us a call</a> to make your booking!</p>
          </div>
        </Carousel>
      </div>
      <div className="container">
        <section className="section">
          <h1>Get in touch</h1>
          <h2>Booking form coming soon...</h2>
        </section>
      </div>
    </div>
  )
}

export default Contact