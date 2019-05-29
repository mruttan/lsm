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
        if (this.page >= this.props.allprods.length / 3) {
            this.page -= 1;
        }
        this.page += 1;
        this.setState({
            subset_prods: this.props.allprods.filter(prod => prod.page == this.page)
        });
        console.log(this.page);
    }

    handleButtonClickPrevious() {
        if (this.page <= 1) {
            this.page += 1;
        }
        this.page -= 1;
        this.setState({
            subset_prods: this.props.allprods.filter(prod => prod.page == this.page)
        });
        console.log(this.page);
    }

    handleButtonClickJackets() {
        this.setState({
            subset_prods: this.props.allprods.filter(prod => prod.category == 'jacket')
        })
    }

    render() {
        return (
            <div>
                <div className="row text-center">
                    <div className="col-4">
                        <button onClick={this.handleButtonClickJackets.bind(this)}
                            className="btn btn-link">
                            Apparel
                        </button>
                    </div>
                    <div className="col-4">
                        <button onClick={this.handleButtonClickJackets.bind(this)}
                            className="btn btn-link">
                            Headwear
                        </button>
                    </div>
                    <div className="col-4">
                        <button onClick={this.handleButtonClickJackets.bind(this)}
                            className="btn btn-link">
                            Bags
                        </button>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-4">
                        <button onClick={this.handleButtonClickJackets.bind(this)}
                            className="btn btn-link">
                            Drinkware
                        </button>
                    </div>
                    <div className="col-4">
                        <button onClick={this.handleButtonClickPrevious.bind(this)}
                            className="btn btn-link">
                            Office/Technology (also button previous for testing)
                        </button>
                    </div>
                    <div className="col-4">
                        <button onClick={this.handleButtonClickNext.bind(this)}
                            className="btn btn-link">
                            Writing (also button next for testing)
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="row pt-4 pb-4 d-flex justify-content-center">
                            <div className="product-list">
                                {this.state.subset_prods.map(product =>
                                    <ProductDetail key={product.title} product={product} />
                                )}
                            </div>
                        </div>
                    </div>
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
    // return {plist: PList.find({
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