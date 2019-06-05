import React from 'react';
import { withRouter } from 'react-router-dom';

//plan is to integrate ideas from current animated carousel into this, delete animatedcarousel,
//and build this up to what I want. it is working as intended.
class MyCarousel extends React.Component {
  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="/images/Golf-Course-TestLandscape2.jpg" alt="First slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="animated bounceInRight delay-1s">test slide 1</h5>
              <p className="animated bounceInLeft delay-2s">test slide 1</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="/images/Golf-Course-TestLandscape2.jpg" alt="Second slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="animated slideInDown delay-1s">test slide 2</h5>
              <p className="animated slideInRight delay-2s">test slide 2</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="/images/Golf-Course-TestLandscape2.jpg" alt="Third slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="animated zoomIn delay-1s">test slide 3</h5>
              <p className="animated zoomIn delay-2s">test slide 3</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default withRouter(MyCarousel);