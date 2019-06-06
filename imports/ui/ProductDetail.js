import React from 'react';
import { withRouter } from 'react-router-dom';

export const ProductDetail = ({ product }) => {
    const { title, link, brand } = product;
  
    return(
        <div className="my-auto">
            <img className="product-image" src={link} />
            <div>
                <img className="product-brand" src={brand} />
            </div>
        </div>
    );
}


export default withRouter(ProductDetail);