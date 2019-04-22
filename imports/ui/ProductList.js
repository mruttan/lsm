import React from 'react';
import { withRouter } from 'react-router-dom';

import ProductDetail from './ProductDetail';
import { IMAGES } from './StaticData';

export const ProductList = () => {
    
    const RenderedImages = IMAGES.map(image => {
        return <ProductDetail key={image.title} image={image} />
    });

    return(
        <ul>
            {RenderedImages}
        </ul>
        
    );
}



export default withRouter(ProductList);