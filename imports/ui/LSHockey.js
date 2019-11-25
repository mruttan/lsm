import React from 'react';
import { withRouter } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

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
        <div className="container">
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
        </div>
        <SiteFooter />
      </div>
    );
  }
}

export default withRouter(LSHockey);