import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class HeroCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="img/hero/carousel/1.jpg" alt="Kindly Leave the Stage" />
          <p className="legend">Michele A'Court and Jeremy Elwood "On the Road"</p>
        </div>
        <div>
          <img src="img/hero/carousel/2.jpg" alt="Neighbouring Planets" />
          <p className="legend">Local band Neighbouring Planets at the monthly Music Club</p>
        </div>
        <div>
          <img src="img/hero/carousel/3.jpg" alt="Coghill Comedy" />
          <p className="legend">Offbeat Theatre production of Kindly Leave the Stage</p>
        </div>
      </Carousel>
    )
  }
}
 
export default HeroCarousel
 