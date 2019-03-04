import React from 'react';
import Hero from '../../img/hero/about.jpg'
import { Carousel } from 'react-responsive-carousel';

const About = () => {
  return (
    <div className="view view--events">
      <div className="hero">
        <Carousel>
          <div>
            <img src={Hero} alt="About Coghill" />
            <p className="legend">About</p>
          </div>
        </Carousel>
      </div>
      <div className="container">
        <section className="section">
          <h1>Who we are</h1>
          <h2>Coghill, Monkey House history etc...</h2>
          <h3>Other offerings</h3>
        </section>
      </div>
    </div>
  )
}

export default About