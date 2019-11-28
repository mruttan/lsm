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
                    <p>
                        At Lion’s Share our goal is to help you increase your
                        brand's visibility, while generating the highest return
                        on your investment. Our friendly experienced team has
                        access to thousands of quality promotional products. We
                        will take the time to define your requirements, then
                        make suggestions to maximize the impact of your custom
                        order.
                      </p>
                      <p className="mb-2">
                        We practice excellent customer service in each detail to
                        meet all of your needs and earn your trust.
                      </p>
                      <p className="mb-2">
                        We also offer quality Heat transfer, screen printing and
                        embroidery!
                      </p>
                      <p className="mb-2">
                        We specialize in custom hockey association programs for
                        apparel and uniforms. Starting with putting together a
                        proposed program, pricing and terms, to fittings to
                        production and finally delivery! We have a full showroom
                        and store to accommodate our hockey association members.
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
