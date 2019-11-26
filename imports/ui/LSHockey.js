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

        <header class="masthead">
          <div class="container mt-5">
            <div class="intro-text">
              <div class="intro-lead-in">Welcome To Our Studio!</div>
              <div class="intro-heading text-uppercase">
                It's Nice To Meet You
              </div>
            </div>
          </div>
        </header>

        <section class="page-section cta">
          <div class="container">
            <div class="row">
              <div class="col-xl-9 mx-auto">
                <div class="cta-inner text-center rounded">

                  <div class="row">
                    <div class="col-xl-12 text-center">
                      <h2 class="section-heading text-uppercase">Services</h2>
                      <h3 class="section-subheading text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </h3>
                    </div>
                  </div>
                  <div class="row text-center">
                    <div class="col-md-4">
                      <span class="fa-stack fa-4x">
                        <i class="fas fa-circle fa-stack-2x text-primary"></i>
                        <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                      </span>
                      <h4 class="service-heading">E-Commerce</h4>
                      <p class="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Minima maxime quam architecto quo inventore harum
                        ex magni, dicta impedit.
                      </p>
                    </div>
                    <div class="col-md-4">
                      <span class="fa-stack fa-4x">
                        <i class="fas fa-circle fa-stack-2x text-primary"></i>
                        <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                      </span>
                      <h4 class="service-heading">Responsive Design</h4>
                      <p class="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Minima maxime quam architecto quo inventore harum
                        ex magni, dicta impedit.
                      </p>
                    </div>
                    <div class="col-md-4">
                      <span class="fa-stack fa-4x">
                        <i class="fas fa-circle fa-stack-2x text-primary"></i>
                        <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                      </span>
                      <h4 class="service-heading">Web Security</h4>
                      <p class="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Minima maxime quam architecto quo inventore harum
                        ex magni, dicta impedit.
                      </p>
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
