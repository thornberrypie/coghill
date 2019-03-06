import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../img/hero/carousel/1.jpg'
import img2 from '../img/hero/carousel/2.jpg'
import img3 from '../img/hero/carousel/3.jpg'

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
      <Carousel
        autoPlay
        infiniteLoop={true}
        interval={6789}
        showThumbs={false}
        stopOnHover={false}
      >
        <div>
          <img src={img1} alt="Comedy at Coghill" />
          <p className="legend">{this.getCleanLegend(Legends[0])}</p>
        </div>
        <div>
          <img src={img2} alt="Live local music" />
          <p className="legend">{this.getCleanLegend(Legends[1])}</p>
        </div>
        <div>
          <img src={img3} alt="Offbeat Theatre productions" />
          <p className="legend">{this.getCleanLegend(Legends[2])}</p>
        </div>
      </Carousel>
    )
  }
}
 
export default HeroCarousel
 