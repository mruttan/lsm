import React from "react";
import { withRouter } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export class LSHockey extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(props) {
    return (
      <div>
        <SiteHeader title="LSM" />

        <header className="masthead">
          <div className="container d-flex align-items-center flex-column">
            <img
              className="lshockeylogo mt-5"
              src="/images/logos/LionsShareHockeyLogo.png"
              alt=""
            />
          </div>
        </header>

        <section className="page-section cta mt-0">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <div className="cta-inner text-center rounded bg-white">
                  <div className="row">
                    <div className="col-xl-12 text-center">
                      <h2 className="section-heading text-uppercase">
                        Hockey Program
                      </h2>
                    </div>
                  </div>
                  <div className="row text-center mt-3">
                    <div className="col">
                      <p className="text-muted">
                        blurb about what the hockey program is about 
                        blurb about what the hockey program is about 
                        blurb about what the hockey program is about 
                        blurb about what the hockey program is about 
                        blurb about what the hockey program is about 
                        blurb about what the hockey program is about 
                        blurb about what the hockey program is about 
                        blurb about what the hockey program is about 
                        blurb about what the hockey program is about 
                        blurb about what the hockey program is about 
                        blurb about what the hockey program is about 
                        blurb about what the hockey program is about 
                        blurb about what the hockey program is about 
                      </p>
                    </div>
                  </div>
                  <hr className="my-4" />

                  <div className="row mt-3">
                    <div className="col text-center">
                      <h4 className="service-heading">Present Programs</h4>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-6">
                      <img
                        className="programlogo"
                        src="/images/lshockey/auroratigers.jpg"
                        alt=""
                      />
                      <p>Aurora Tigers</p>
                    </div>
                    <div className="col-6">
                      <img
                        className="programlogo"
                        src="/images/lshockey/georginagoldenhawks.png"
                        alt=""
                      />
                      <p>Georgina Golden Hawks</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col text-center">
                      <h4 className="service-heading">Past Programs</h4>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-6">
                      <img
                        className="programlogo"
                        src="/images/lshockey/newmarketredmen.jpg"
                        alt=""
                      />                      
                      <p>Newmarket Redmen</p>                      
                    </div>
                    <div className="col-6">
                      <img
                        className="programlogo"
                        src="/images/lshockey/yorksimcoeexpress.jpg"
                        alt=""
                      />
                      <p>York Simcoe Express</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="container">
          <div className="row">
            <section className="col-12">
              <div className="col justify-content-center">

                <div className="jumbotron mx-auto">
                  <img src="/images/logos/LionsShareHockeyLogo.png" className="rounded mx-auto d-block w-25" alt="TitleLogo"></img>
                  <p className="lead">Hockey Program</p>
                  <p className="">Blurb about LS Hockey ---------------------------------------- ~~~~~~~~~~~~~~~~ ~~~~~~~~~~ ~~~~~ ~~~~~~~~~~~~~~~ ~~~~~~~~~ ~~~~~~~~~~~~ ~~~~~~~~~ ~~~~~</p>
                  <p>
                    list programs being used
                    list popular products like team apparal / jersey
                    use grid below to use pictures of popular items, could do it for each org or picture of apparal item / org using it
                                    </p>



                  <div className="grid-container">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                  </div>
                </div>

              </div>
            </section>
          </div>
        </div> */}
        <SiteFooter />
      </div>
    );
  }
}

export default withRouter(LSHockey);
