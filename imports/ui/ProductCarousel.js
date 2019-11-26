import React from 'react';
import { withRouter } from 'react-router-dom';

export class ProductCarousel extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <section className="col-12">
            <div className="btn-toolbar justify-content-center mb-2" aria-label="All Product Categories">
              <div className="btn-group d-none d-md-block product-carousel-btn-lg">
                <button data-target="#productCarousel" data-slide-to="0" className="btn btn-outline-primary custom-button-width">Apparel</button>
                <button data-target="#productCarousel" data-slide-to="1" className="btn btn-outline-secondary custom-button-width">Headwear</button>
                <button data-target="#productCarousel" data-slide-to="2" className="btn btn-outline-success custom-button-width">Bags</button>
                <button data-target="#productCarousel" data-slide-to="3" className="btn btn-outline-danger custom-button-width">Drinkware</button>
                <button data-target="#productCarousel" data-slide-to="4" className="btn btn-outline-warning custom-button-width">Technology</button>
                <button data-target="#productCarousel" data-slide-to="5" className="btn btn-outline-info custom-button-width">Writing</button>
              </div>
              <div className="d-block d-md-none product-carousel-btn-sm">
                <button data-target="#productCarousel" data-slide-to="0" className="col-4 btn-outline-primary custom-button-width">Apparel</button>
                <button data-target="#productCarousel" data-slide-to="1" className="col-4 btn-outline-secondary custom-button-width">Headwear</button>
                <button data-target="#productCarousel" data-slide-to="2" className="col-4 btn-outline-success custom-button-width">Bags</button>
                <button data-target="#productCarousel" data-slide-to="3" className="col-4 btn-outline-danger custom-button-width">Drinkware</button>
                <button data-target="#productCarousel" data-slide-to="4" className="col-4 btn-outline-warning custom-button-width">Technology</button>
                <button data-target="#productCarousel" data-slide-to="5" className="col-4 btn-outline-info custom-button-width">Writing</button>
              </div>


            </div>
          </section>
        </div> {/* row */}
        <div className="row">
          <section className="col-12 d-md-block d-none">

            <div className="carousel slide" id="productCarousel" data-ride="carousel" data-interval="10000">
              <ol className="carousel-indicators">
                <li data-target="#productCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#productCarousel" data-slide-to="1"></li>
                <li data-target="#productCarousel" data-slide-to="2"></li>
                <li data-target="#productCarousel" data-slide-to="3"></li>
                <li data-target="#productCarousel" data-slide-to="4"></li>
                <li data-target="#productCarousel" data-slide-to="5"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-block w-100 bg-warning product-carousel-height" alt="Apparel">
                    <div className="carousel-caption d-block">
                      <img className="animated bounceInRight delay-2s product-carousel-image-height" src="/images/productexamples/apparel/ccm-trackjacket.png" />
                      <img className="animated bounceInRight delay-3s product-carousel-image-height" src="/images/productexamples/apparel/stormtech-jacket.png" />
                      <img className="animated bounceInRight delay-4s product-carousel-image-height" src="/images/productexamples/apparel/nike-apparel.png" />
                      <img className="animated bounceInRight delay-5s product-carousel-image-height" src="/images/productexamples/apparel/underarmour-apparel.png" />
                      <p className="animated bounceInLeft delay-1s coiny">Apparel</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-block w-100 bg-secondary product-carousel-height" alt="Headwear">
                    <div className="carousel-caption d-block">
                      <img className="animated bounceInRight delay-2s product-carousel-image-height" src="/images/productexamples/headwear/nike-headwear.png" />
                      <img className="animated bounceInRight delay-3s product-carousel-image-height" src="/images/productexamples/headwear/puma-headwear.png" />
                      <img className="animated bounceInRight delay-4s product-carousel-image-height" src="/images/productexamples/headwear/fersten-headwear.png" />
                      <img className="animated bounceInRight delay-5s product-carousel-image-height" src="/images/productexamples/headwear/knp-headwear.png" />
                      <p className="animated bounceInLeft delay-1s coiny">Headwear</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-block w-100 bg-success product-carousel-height" alt="Bags">
                    <div className="carousel-caption d-block">
                      <img className="animated bounceInRight delay-2s product-carousel-image-height" src="/images/productexamples/bags/debco-blackbag.png" />
                      <img className="animated bounceInRight delay-3s product-carousel-image-height" src="/images/productexamples/bags/debco-greenbag.png" />
                      <img className="animated bounceInRight delay-4s product-carousel-image-height" src="/images/productexamples/bags/debco-totebag.png" />
                      <img className="animated bounceInRight delay-5s product-carousel-image-height" src="/images/productexamples/bags/starline-lunchbag.png" />
                      <p className="animated bounceInLeft delay-1s coiny">Bags</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-block w-100 bg-danger product-carousel-height" alt="Drinkware">
                    <div className="carousel-caption d-block">
                      <img className="animated bounceInRight delay-2s product-carousel-image-height" src="/images/productexamples/drinkware/bottle-drinkware.png" />
                      <img className="animated bounceInRight delay-3s product-carousel-image-height" src="/images/productexamples/drinkware/mug-drinkware.png" />
                      <img className="animated bounceInRight delay-4s product-carousel-image-height" src="/images/productexamples/drinkware/coffeemug-drinkware.png" />
                      <img className="animated bounceInRight delay-5s product-carousel-image-height" src="/images/productexamples/drinkware/mug2-drinkware.png" />
                      <p className="animated bounceInLeft delay-1s coiny">Drinkware</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-block w-100 bg-warning product-carousel-height" alt="Technology">
                    <div className="carousel-caption d-block">
                      <img className="animated bounceInRight delay-2s product-carousel-image-height" src="/images/productexamples/technology/debco-3in1chargingcable.png" />
                      <img className="animated bounceInRight delay-3s product-carousel-image-height" src="/images/productexamples/technology/debco-plasticsmartphoneholder.png" />
                      <img className="animated bounceInRight delay-4s product-carousel-image-height" src="/images/productexamples/technology/debco-powerbank.png" />
                      <img className="animated bounceInRight delay-5s product-carousel-image-height" src="/images/productexamples/technology/starline-bluetoothspeaker.png" />
                      <p className="animated bounceInLeft delay-1s coiny">Technology</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-block w-100 bg-info product-carousel-height" alt="Writing">
                    <div className="carousel-caption d-block">
                      <img className="animated bounceInRight delay-2s product-carousel-image-height" src="/images/productexamples/writing/bic-britelinergrippen.png" />
                      <img className="animated bounceInRight delay-3s product-carousel-image-height" src="/images/productexamples/writing/bic-versestyluspen.png" />
                      <img className="animated bounceInRight delay-4s product-carousel-image-height" src="/images/productexamples/writing/spector&co-2piecepenset.png" />
                      <img className="animated bounceInRight delay-5s product-carousel-image-height" src="/images/productexamples/writing/spector&co-3piecepenset.png" />
                      <p className="animated bounceInLeft delay-1s coiny">Writing</p>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#productCarousel" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#productCarousel" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>

            </div>

          </section>


          <section className="col-12 d-block d-md-none">

            <div className="carousel slide" id="productCarousel" data-ride="carousel" data-interval="10000">
              <ol className="carousel-indicators">
                <li data-target="#productCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#productCarousel" data-slide-to="1"></li>
                <li data-target="#productCarousel" data-slide-to="2"></li>
                <li data-target="#productCarousel" data-slide-to="3"></li>
                <li data-target="#productCarousel" data-slide-to="4"></li>
                <li data-target="#productCarousel" data-slide-to="5"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-block w-100 bg-warning product-carousel-height" alt="Apparel">
                    <div className="carousel-caption d-block">
                      <img className="animated bounceInRight delay-2s product-carousel-image-height" src="/images/productexamples/apparel/ccm-trackjacket.png" />
                      <img className="animated bounceInRight delay-3s product-carousel-image-height" src="/images/productexamples/apparel/stormtech-jacket.png" />
                      <p className="animated bounceInLeft delay-1s coiny">Apparel</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-block w-100 bg-secondary product-carousel-height" alt="Headwear">
                    <div className="carousel-caption d-block">
                      <img className="animated bounceInRight delay-2s product-carousel-image-height" src="/images/productexamples/headwear/nike-headwear.png" />
                      <img className="animated bounceInRight delay-3s product-carousel-image-height" src="/images/productexamples/headwear/puma-headwear.png" />
                      <p className="animated bounceInLeft delay-1s coiny">Headwear</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-block w-100 bg-success product-carousel-height" alt="Bags">
                    <div className="carousel-caption d-block">
                      <img className="animated bounceInRight delay-2s product-carousel-image-height" src="/images/productexamples/bags/debco-blackbag.png" />
                      <img className="animated bounceInRight delay-3s product-carousel-image-height" src="/images/productexamples/bags/debco-greenbag.png" />
                      <p className="animated bounceInLeft delay-1s coiny">Bags</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-block w-100 bg-danger product-carousel-height" alt="Drinkware">
                    <div className="carousel-caption d-block">
                      <img className="animated bounceInRight delay-2s product-carousel-image-height" src="/images/productexamples/drinkware/bottle-drinkware.png" />
                      <img className="animated bounceInRight delay-3s product-carousel-image-height" src="/images/productexamples/drinkware/mug-drinkware.png" />
                      <p className="animated bounceInLeft delay-1s coiny">Drinkware</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-block w-100 bg-warning product-carousel-height" alt="Technology">
                    <div className="carousel-caption d-block">
                      <img className="animated bounceInRight delay-2s product-carousel-image-height" src="/images/productexamples/technology/debco-3in1chargingcable.png" />
                      <img className="animated bounceInRight delay-3s product-carousel-image-height" src="/images/productexamples/technology/debco-plasticsmartphoneholder.png" />
                      <p className="animated bounceInLeft delay-1s coiny">Technology</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-block w-100 bg-info product-carousel-height" alt="Writing">
                    <div className="carousel-caption d-block">
                      <img className="animated bounceInRight delay-2s product-carousel-image-height" src="/images/productexamples/writing/bic-britelinergrippen.png" />
                      <img className="animated bounceInRight delay-3s product-carousel-image-height" src="/images/productexamples/writing/bic-versestyluspen.png" />
                      <p className="animated bounceInLeft delay-1s coiny">Writing</p>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#productCarousel" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#productCarousel" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>

            </div>

          </section>
        </div> {/* row */}
      </div> //content container
    );
  }
}

export default withRouter(ProductCarousel);

