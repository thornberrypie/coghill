import React from 'react';
import Hero from '../../img/hero/events.jpg'
import { Carousel } from 'react-responsive-carousel';

const Events = () => {
  return (
    <div className="view view--events">
      <div className="hero">
        <Carousel>
          <div>
            <img src={Hero} alt="Contact Coghill" />
            <p className="legend">Music Club: open mic night the second Friday of every month</p>
          </div>
        </Carousel>
      </div>
      <div className="container">
        <section className="section">
          <h1>What's on</h1>
          <h2>Events calendar coming soon...</h2>
          <h3></h3>
        </section>
      </div>
    </div>
  )
}

export default Events