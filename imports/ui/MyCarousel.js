import React from 'react';
import { withRouter } from 'react-router-dom';

//plan is to integrate ideas from current animated carousel into this, delete animatedcarousel,
//and build this up to what I want. it is working as intended.


//pick 3 pictures with same dimensions / or crop images to be the same height
class MyCarousel extends React.Component {
  render() {
    return (
      <div>
        <div>
          <section>

        

            <div id="carouselIndicators" className="carousel slide mb-5" data-ride="carousel" data-interval="10000">
              <ol className="carousel-indicators">
                <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselIndicators" data-slide-to="1"></li>
                <li data-target="#carouselIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100 carousel-height" src="/images/productexamples/carousel/background/hockeyarena.jpg" alt="First slide"/>
                  <div className="carousel-caption d-block">
                    <img className="animated bounceInRight delay-1s c-1" src="/images/productexamples/carousel/golfbag.png"/>
                    <img className="animated bounceInRight delay-2s c-1" src="/images/productexamples/carousel/golftowel.png"/>
                    <img className="animated bounceInRight delay-3s c-1" src="/images/productexamples/carousel/emptygolfball.png"/>

                    <p className="animated bounceInLeft delay-4s coiny">Your Logo On Anything</p>

                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100 carousel-height" src="/images/productexamples/carousel/background/hockeyarena.jpg" alt="Second slide"/>
                  <div className="carousel-caption d-block">
                    <img className="animated bounceInRight delay-1s c-1" src="/images/productexamples/apparel/ccm_trackjacket.png"/>
                    <img className="animated bounceInUp delay-2s c-1" src="/images/productexamples/bags/bauer_bag.png"/>
                    <img className="animated bounceInLeft delay-3s c-1" src="/images/productexamples/carousel/puck.png"/>
                    <p className="animated bounceInDown delay-4s coiny">Teamwear</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100 carousel-height" src="/images/productexamples/carousel/background/hockeyarena.jpg" alt="Third slide"/>
                  <div className="carousel-caption d-block">
                    <img className="animated zoomIn delay-1s c-1" src="/images/productexamples/carousel/waterbottle.png"/>
                    <img className="animated zoomIn delay-2s c-1" src="/images/productexamples/carousel/pens.png"/>
                    <img className="animated zoomIn delay-3s c-1" src="/images/productexamples/carousel/emptysweater.png"/>

                    <p className="animated zoomIn delay-4s coiny">Corperate Products</p>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            {/*
            this is an example of how you would set up buttons to work outside of a carousel

            <div className="row">
              <div className="col-12 bg-dark">
                    <button data-target="#carouselIndicators" data-slide-to="0" className="button active"></button>
                    <button data-target="#carouselIndicators" data-slide-to="1" className="button"></button>
                    <button data-target="#carouselIndicators" data-slide-to="2" className="button"></button>

              </div>
            </div> 
            */}
            
          </section>
        </div> {/* row */}
      </div> //content container 
    );
  }
}

export default withRouter(MyCarousel);