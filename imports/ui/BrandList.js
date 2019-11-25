import React from 'react';
import { withRouter } from 'react-router-dom';

import BrandDetail from './BrandDetail';

export class BrandList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="brands-container">
        <ul className="brands-list">
          {this.props.allbrands.map(brand =>
            <BrandDetail key={brand.brand} brand={brand} />
          )}
        </ul>
      </div>
    );
  }
}

export default withRouter(BrandList);