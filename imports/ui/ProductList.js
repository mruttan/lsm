import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import ProductDetail from './ProductDetail';
import { PList } from '../collections/PList';

export const ProductList = (props) => {
    
    console.log(props.plist);
    const RenderedImages = props.plist.map(image => {
        return <ProductDetail key={image._id} image={image} />
    });

    return(
        <div>
            {RenderedImages}
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