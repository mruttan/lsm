import React from 'react';
import { withRouter } from 'react-router-dom';

class AnimatedCarousel extends React.Component {
  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
    
        <div className="carousel-inner">
    
          <div className="carousel-item active">
            <img src="/images/Golf-Course-TestLandscape2.jpg" alt="Los Angeles" width="1100" height="500"/>
            <div className="carousel-caption d-md-block">
              <h3 data-animation="animated bounceInLeft">
                This is the caption for slide 1
              </h3>
              <h3 data-animation="animated bounceInRight">
                This is the caption for slide 1
              </h3>
              <button className="btn btn-primary btn-lg" data-animation="animated zoomInUp">Button</button>
            </div>
          </div>
    
          <div className="carousel-item">
            <img src="/images/Pond-Hockey-TestLandscape1.jpg" alt="New York" width="1100" height="500"/>
            <div className="carousel-caption d-md-block">
              <h3 data-animation="animated bounceInLeft">
                This is the caption for slide 2
              </h3>
              <h3 data-animation="animated bounceInRight">
                This is the caption for slide 2
              </h3>
              <button className="btn btn-primary btn-lg" data-animation="animated zoomInUp">Button</button>
            </div> 
          </div>
    
          <div className="carousel-item">
            <img src="/images/Golf-Course-TestLandscape2.jpg" alt="Los Angeles" width="1100" height="500"/>
            <div className="carousel-caption d-md-block">
              <h3 data-animation="animated bounceInLeft">
                This is the caption for slide 3
              </h3>
              <h3 data-animation="animated bounceInRight">
                This is the caption for slide 3
              </h3>
              <button className="btn btn-primary btn-lg" data-animation="animated zoomInUp">Button</button>
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

export default withRouter(AnimatedCarousel);