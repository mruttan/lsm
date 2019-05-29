import React from 'react';
import { withRouter } from 'react-router-dom';

import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

export class Services extends React.Component {
  constructor(props) {
    super(props);
  }
//currently converting all of existing classes to use Bootstrap 4 classes, MY css!
  render(props) {
    return (
      <div>
        <SiteHeader title="LSM" />
        <div className="container">
            <div className="row pt-4">
                <h1>Services</h1>
            </div>
            <div className="row">
                <h3>Heat Transfer</h3>
            </div>
            <div className="row pb-4">
                <div className="col-sm-3">
                    <img className="service-image" src="/images/services/heatpress.png" />
                </div>
                <div className="col-sm-9">
                    <p>Offering a variety of top brands and apparel, Lion's Share has you covered for all your sportswear needs.</p>
                    <p>Lion's Share offers a wide range of promotional products, take a look at our current products, or if you have something else in mind for your team or company, give us a call, 
                    we'd love to help you out.</p>
                </div>
            </div>
            <div className="row">
                <h3>Embroidery</h3>
            </div>
            <div className="row pb-4">
                <div className="col-sm-9">
                    <p>Offering a variety of top brands and apparel, Lion's Share has you covered for all your sportswear needs.</p>
                    <p>Lion's Share offers a wide range of promotional products, take a look at our current products, or if you have something else in mind for your team or company, give us a call, 
                    we'd love to help you out.</p>
                </div>
                <div className="col-sm-3">
                    <img className="service-image" src="/images/services/embroidery.jpg" />
                </div>
            </div>
            <div className="row">
                <h3>Custom Apparrel</h3>
            </div>
            <div className="row pb-4">
                <div className="col-sm-3">
                    <img className="service-image" src="/images/services/customapparrel.jpg" />
                </div>
                <div className="col-sm-9">
                    <p>Offering a variety of top brands and apparel, Lion's Share has you covered for all your sportswear needs.</p>
                    <p>Lion's Share offers a wide range of promotional products, take a look at our current products, or if you have something else in mind for your team or company, give us a call, 
                    we'd love to help you out.</p>
                </div>
            </div>
            <div className="row">
                <h3>Screen Printing</h3>
            </div>
            <div className="row pb-4">
                <div className="col-sm-9">
                    <p>Offering a variety of top brands and apparel, Lion's Share has you covered for all your sportswear needs.</p>
                    <p>Lion's Share offers a wide range of promotional products, take a look at our current products, or if you have something else in mind for your team or company, give us a call, 
                    we'd love to help you out.</p>
                </div>
                <div className="col-sm-3">
                    <img className="service-image" src="/images/services/screenprinting.png" />
                </div>
            </div>
            <div className="row">
                <h3>Fulfillment</h3>
            </div>
            <div className="row pb-4">
                <div className="col-sm-3">
                    <img className="service-image" src="/images/services/fulfillment.jpg" />
                </div>
                <div className="col-sm-9">
                    <p>Offering a variety of top brands and apparel, Lion's Share has you covered for all your sportswear needs.</p>
                    <p>Lion's Share offers a wide range of promotional products, take a look at our current products, or if you have something else in mind for your team or company, give us a call, 
                    we'd love to help you out.</p>
                </div>
            </div>
            <div className="row">
                <h3>E-Commerce</h3>
            </div>
            <div className="row pb-4">
                <div className="col-sm-9">
                    <p>Offering a variety of top brands and apparel, Lion's Share has you covered for all your sportswear needs.</p>
                    <p>Lion's Share offers a wide range of promotional products, take a look at our current products, or if you have something else in mind for your team or company, give us a call, 
                    we'd love to help you out.</p>
                </div>
                <div className="col-sm-3">
                    <img className="service-image" src="/images/services/ecommerce.jpg" />
                </div>
            </div>
            {/* <div className="row">
                <div className="col">
                    <div className="fakeimg">1st service</div>
                </div>
                <div className="col">
                    <div className="fakeimg2">2nd service</div>
                </div>
                <div className="col">
                    <div className="fakeimg3">3rd service</div>
                </div>
            </div> */}
            
            
        </div>
        <SiteFooter/>
      </div>
    );
  }
}

export default withRouter(Services);