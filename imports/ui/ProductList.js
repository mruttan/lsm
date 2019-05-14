import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import ProductDetail from './ProductDetail';
import { PList } from '../collections/PList';


export class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subset_prods: []
        }
    }

    componentWillMount() {
        this.page = 1;
        this.setState({ 
            subset_prods: this.props.allprods.filter(prod => prod.page == this.page)
        });
    }
    
    //able to pass array straight up, now can i manip via state and array size? HELL YEA i can
    
    handleButtonClickNext() {        
        if(this.page >= this.props.allprods.length) {
            this.page -= 1;
        }
        this.page += 1;
        this.setState({
            subset_prods: this.props.allprods.filter(prod => prod.page == this.page)
        });
        console.log(this.page);
    }

    render() {
        return(
            <div>
                <div className="product-list">
                    {this.state.subset_prods.map(product => 
                        <ProductDetail key={product.title} product={product}/>
                    )}
                </div>
                {/* <button onClick={this.handleButtonClickPrevious.bind(this)} 
                    className="btn btn-primary">
                    Load Previous...
                </button> */}
                <button onClick={this.handleButtonClickNext.bind(this)} 
                    className="btn btn-primary">
                    Load Next...
                </button>

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
        );
    }
}

export default withTracker(() => {
    //Meteor.subscribe('plist')
    //Meteor.subscribe('plist', PAGE_NUM);


    return { 
        //plist: PList.find({}).fetch()
    };
    // return { plist: PList.find({
    //     page: {
    //         $eq: PAGE_NUM
    //     }
    // }).fetch() };
})(ProductList);


//need to get pagination working with react/meteor
//either need to use session to add a selected class, or use meteor methods on
//the pagination buttons

//going to try using a session variable to display first 10-20 articles per page,
//adding a "page" value to each article.

//try getting info in Products.js, and passing it down to ProductList via props.