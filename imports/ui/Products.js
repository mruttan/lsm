import React from 'react';
import { withRouter } from 'react-router-dom';

import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import ProductList from './ProductList';

export class Products extends React.Component {
  constructor(props) {
    super(props);
  }
//currently converting all of existing classes to use Bootstrap 4 classes, MY css!
  render(props) {
    return (
      <div>
        <SiteHeader title="LSM" />
        
        <div className="container">
            <div className="row">
          
                <div className="col-sm-3">
                    <h1>Products Page</h1>
                    {/* Need to put in list of prod (filters) here, also organize into list */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <a href="#" className="list-group-item-action">First item</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#" className="list-group-item-action">Second item</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#" className="list-group-item-action">Third item</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#" className="list-group-item-action">Fourth item</a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-9">
                    {/* product list goes here, going to build it up */}
                    <ProductList />
                    <div className="pt-5">
                        {/* Need to put in pagination */}
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#">Previous</a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" href="#">1</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">3</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      
        <SiteFooter/>
      </div>
    );
}
}

export default withRouter(Products);
{/* <div className="row pb-5">
  <div className="col-sm-6">
    <h3>Contact</h3>
    <ul className="nav nav-pills flex-column">
      <li className="nav-item">
        <a className="nav-link disabled" href="#">(905) 555-5555</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">email@example.com</a>
      </li>
    </ul>
    <hr/>
    <h3>Hours</h3>
    <ul className="nav nav-pills flex-column">
      <li className="nav-item">
        <a className="nav-link disabled">Mon-Fri</a>
        <a className="nav-link disabled" href="#">9am-5pm</a>
      </li>
    </ul>
  </div>
  <div className="col-sm-6">
    <ContactMap/>
  </div> */}
  {/* <div className="col-sm-4">
    <div className="fakeimg4">I Could display a Service in here</div>
    <br/>
    <div className="fakeimg5">Example of Service</div>
    <br/>
    <div className="fakeimg6">Example of Service</div>
  </div> */}