import React from 'react';
import { withRouter } from 'react-router-dom';

import ProductDetail from './ProductDetail';


export class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homepage_plist: []
    }
  }

  componentWillMount() {
    this.setState({
      homepage_plist: this.props.homepage_prods.filter(prod => prod.homepage)
    });
  }

  render() {
    return (
      <div>
        <div className="product-list">
          {this.state.homepage_plist.map(product =>
            <ProductDetail key={product.title} product={product} />
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(ProductList);