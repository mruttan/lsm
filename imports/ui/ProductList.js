import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import ProductDetail from './ProductDetail';
import { PList } from '../collections/PList';

const PER_PAGE = 1;

export class ProductList extends React.Component {
    componentWillMount() {
        this.page = 1;
        //console.log(props.plist);
    }
    
    handleButtonClick() {
        Meteor.subscribe('plist', PER_PAGE + this.page);
        this.page += 1;
    }
    // const RenderedImages = props.plist.map(image => {
    //     return <ProductDetail key={image._id} image={image} />
    // });
    render() {
        return(
            <div>
                <div className="product-list">
                    {this.props.plist.map(product => 
                        <ProductDetail key={product._id} product={product}/>
                    )}
                </div>
                <button onClick={this.handleButtonClick.bind(this)} 
                    className="btn btn-primary">
                    Load More...
                </button>
            </div>
        );
    }
}

// ProductList.propTypes = {
//     plist: PropTypes.array.isRequired
// }

export default withTracker(() => {
    Meteor.subscribe('plist', PER_PAGE);
    
    return { plist: PList.find({}).fetch() };
})(ProductList);


//need to get pagination working with react/meteor
//either need to use session to add a selected class, or use meteor methods on
//the pagination buttons