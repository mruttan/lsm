import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import ProductDetail from './ProductDetail';
import { PList } from '../collections/PList';

export const ProductList = (props) => {
    
    console.log(props.plist);
    // const RenderedImages = props.plist.map(image => {
    //     return <ProductDetail key={image._id} image={image} />
    // });

    return(
        <div>
            <div className="product-list">
                {props.plist.map(product => 
                    <ProductDetail key={product._id} product={product}/>
                )}
            </div>
            <button>Load More...</button>
        </div>
    );
}

ProductList.propTypes = {
    plist: PropTypes.array.isRequired
}

export default withTracker(() => {
    Meteor.subscribe('plist');
    
    return { plist: PList.find({}).fetch() };
})(ProductList);