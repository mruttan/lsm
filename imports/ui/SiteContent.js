import React from 'react';
import { withRouter } from 'react-router-dom';

import ContactMap from './ContactMap';
export class SiteContent extends React.Component {

  render() {
    return (
      <div>
        <div className="jumbotron text-center text-white title-jumbotron">
          <img className="img-fluid image-jumbotron pb-2" src="/images/Lions-Share-Logo-GoldHead.jpg" alt="TitleLogo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col mx-auto">
              <h2>Lion's Share Hockey</h2>
              <h5>Represent Your Team, Your Way</h5>
              <div className="fakeimg">Picture of the showroom store here</div>
              <p>Offering a variety of top brands and apparel, Lion's Share has you covered for all your sportswear needs.</p>
              <p>Lion's Share offers a wide range of promotional products, take a look at our current products, or if you have something else in mind for your team or company, give us a call, we'd love to help you out.</p>
              <div className="float-right pt-2 pb-4">
                <a className="page-link" href="#">Learn More About Us...</a>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col">
              <div className="fakeimg">I Could display a Service in here1</div>
              <br/>
              <div className="fakeimg2">Example of Service2</div>
              <br/>
              <div className="fakeimg3">Example of Service3</div>
            </div>
            <div className="col">
              <div className="fakeimg4">I Could display a Service in here4</div>
              <br/>
              <div className="fakeimg5">Example of Service5</div>
              <br/>
              <div className="fakeimg6">Example of Service6</div>
            </div>

          </div>
        </div>
        <div className="container">
          <div className="float-right pt-4">
            <a class="page-link" href="#">See More Products...</a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SiteContent);