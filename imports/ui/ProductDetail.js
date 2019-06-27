import React from 'react';
import { withRouter } from 'react-router-dom';

export const ProductDetail = ({ product }) => {
    const { title, img, brand } = product;
  
    return(
        <div className="my-auto pt-3">
            <img className="product-image" src={img} />
            <img className="product-brand" src={brand} />
        </div>
    );
}


export default withRouter(ProductDetail); 