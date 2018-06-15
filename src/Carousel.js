import React from 'react';
import use from './use.PNG';
import share from './share.PNG';
import time from './time.PNG';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './IS.css';

class HomeCarousel extends React.Component {
    render() {
      return (
        <div className="carDiv">
        <center>
        <Carousel autoPlay className="carousel">
            <div>
                 <img src={use} />
            </div>
            <div>
                <img src={share}/>
            </div>
            <div>
                <img src={time} />
            </div>
        </Carousel>
        </center>
        </div>
      );
    }
  }
  
  export default HomeCarousel;
  
  
