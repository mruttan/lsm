import React from 'react';
import { withRouter } from 'react-router-dom';

import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import ProductList from './ProductList';
import { STATIC_DATA } from './StaticData';

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = { prods: [] }
  }

  componentWillMount() {
    this.setState({
      prods: STATIC_DATA
    });
  }

  render() {
    return (
      <div>
        <SiteHeader title="LSM" />
        
        <div className="container">
            <div className="row">
          
                <div className="col-sm-3">
                    <h1>Products Page</h1>
                    {/* Need to put in list of prod (filters) here, also organize into list - stretch goal */}
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
                    <ProductList allprods={this.state.prods} />
                </div>
            </div>
        </div>
      
        <SiteFooter/>
      </div>

    );
  }
}


export default withRouter(Products);

//need to pass plist through this component,
// change render states in child component
//change to class based component, pass through state
//THIS WORKS!!! BUILD UPON IT!!!