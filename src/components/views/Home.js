import React from 'react';
import HeroCarousel from '../HeroCarousel'

const Home = () => {
  return (
    <div className="view view--home">
      <div className="hero">
        <HeroCarousel/>
      </div>
      <div className="container">
        <section className="section">
          <h1 className="hide">The Coghill Centre</h1>
          <h2>Whitianga's Coghill Theatre and Monkey House provide flexible spaces suitable for performances, presentations, celebrations and much more.</h2>
        </section>
      </div>
    </div>
  )
}

export default Home