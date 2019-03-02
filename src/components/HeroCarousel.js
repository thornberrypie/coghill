import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Legends = [
  'Michele A\'Court and Jeremy Elwood "On&nbsp;the&nbsp;Road"',
  'Neighbouring Planets at the monthly "Music&nbsp;Club"',
  'Offbeat Theatre\'s "Kindly&nbsp;Leave the&nbsp;Stage"'
]
 
class HeroCarousel extends Component {
  getCleanLegend(legend) {
    return legend.replace(/&nbsp;/g, "\u00a0")
  }

  render() {
    return (
      <Carousel autoPlay>
        <div>
          <img src="img/hero/carousel/3.jpg" alt="Coghill Comedy" />
          <p className="legend">{this.getCleanLegend(Legends[2])}</p>
        </div>
        <div>
          <img src="img/hero/carousel/2.jpg" alt="Neighbouring Planets" />
          <p className="legend">{this.getCleanLegend(Legends[1])}</p>
        </div>
        <div>
          <img src="img/hero/carousel/1.jpg" alt="Kindly Leave the Stage" />
          <p className="legend">{this.getCleanLegend(Legends[0])}</p>
        </div>
      </Carousel>
    )
  }
}
 
export default HeroCarousel
 