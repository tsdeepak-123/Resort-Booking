import React from 'react'
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Home() {
  return (
    
    <Carousel autoPlay infiniteLoop interval={2000} showStatus={false} showThumbs={false} emulateTouch  className="carousel-container">
    <div >
        <img src="https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </div>
    <div>
        <img src="https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </div>
    <div>
        <img src="https://images.pexels.com/photos/91216/pexels-photo-91216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </div>
</Carousel>

  )
}

export default Home
