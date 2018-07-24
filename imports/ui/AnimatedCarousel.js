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
          {/* here is carousel tinkering, need to try to have an accurate bg/pics and get one slide down */}
          <div className="carousel-item active">
            <img className="slide-bg" src="/images/Golf-Course-TestLandscape2.jpg" alt="Los Angeles" width="1100" height="500"/>
            <div className="carousel-caption d-flex justify-content-centered">
              <img className="bottom-left" id="img-stormtech-1" src="/images/stormtech-jkt-1.png" data-animation="animated bounceInRight"/>
              
              <img className="top" id="img-stormtech-2" src="/images/stormtech-jkt-2.png" data-animation="animated bounceInRight" />

              <img className="bottom-right" id="img-stormtech-3" src="/images/stormtech-jkt-3.png" data-animation="animated bounceInRight" />

              <img className="logo-right" id="logo-stormtech" src="/images/stormtech-logo.png" data-animation="animated zoomInUp"/>


                {/* <button className="btn btn-primary btn-lg" data-animation="animated zoomInUp">Logo</button> */}
            </div>
          </div>

          {/* <div className="carousel-item">
            <img className="slide-bg" src="/images/hockey-rink.jpg" alt="Los Angeles" width="1100" height="500"/>
            <div className="carousel-caption d-flex justify-content-centered">
              
              <img className="bottom-left" id="img-goretex" src="/images/goretex-jkt.png" data-animation="animated bounceInRight"/>
              
              <img className="top" id="img-goretex" src="/images/goretex-jkt.png" data-animation="animated bounceInRight" />

              <img className="bottom-right" id="img-goretex" src="/images/goretex-jkt.png" data-animation="animated bounceInRight" />

              <div className="logo-right">
                <button className="btn btn-primary btn-lg" data-animation="animated zoomInUp">Logo</button>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img className="slide-bg" src="/images/Pond-Hockey.jpg" alt="Los Angeles" width="1100" height="500"/>
            <div className="carousel-caption d-flex justify-content-centered">
              
              <img className="bottom-left" id="img-goretex" src="/images/goretex-jkt.png" data-animation="animated bounceInRight"/>
              
              <img className="top" id="img-goretex" src="/images/goretex-jkt.png" data-animation="animated bounceInRight" />

              <img className="bottom-right" id="img-goretex" src="/images/goretex-jkt.png" data-animation="animated bounceInRight" />

              <div className="logo-right">
                <button className="btn btn-primary btn-lg" data-animation="animated zoomInUp">Logo</button>
              </div>
            </div>
          </div> */}

          
    
          {/* <div className="carousel-item">
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
          </div> */}
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