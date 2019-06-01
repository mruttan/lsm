import React from 'react';
import { withRouter } from 'react-router-dom';

import ProductDetail from './ProductDetail';


export class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subset_prods: []
        }
    }
    componentWillMount() {
        this.setState({
            subset_prods: this.props.allprods.filter(prod => prod.category == 'apparel')
        })
    }
    handleButtonClickApparel() {
        this.setState({
            subset_prods: this.props.allprods.filter(prod => prod.category == 'apparel')
        })
    }
    handleButtonClickHeadwear() {
        this.setState({
            subset_prods: this.props.allprods.filter(prod => prod.category == 'headwear')
        })
    }
    handleButtonClickBags() {
        this.setState({
            subset_prods: this.props.allprods.filter(prod => prod.category == 'bags')
        })
    }
    handleButtonClickDrinkware() {
        this.setState({
            subset_prods: this.props.allprods.filter(prod => prod.category == 'drinkware')
        })
    }
    handleButtonClickOfficeTechnology() {
        this.setState({
            subset_prods: this.props.allprods.filter(prod => prod.category == 'office/technology')
        })
    }
    handleButtonClickWriting() {
        this.setState({
            subset_prods: this.props.allprods.filter(prod => prod.category == 'writing')
        })
    }
    render() {
        return (
            <div>
                <div className="row text-center">
                    <div className="col-4">
                        <button onClick={this.handleButtonClickApparel.bind(this)}
                            className="btn btn-link">
                            Apparel
                        </button>
                    </div>
                    <div className="col-4">
                        <button onClick={this.handleButtonClickHeadwear.bind(this)}
                            className="btn btn-link">
                            Headwear
                        </button>
                    </div>
                    <div className="col-4">
                        <button onClick={this.handleButtonClickBags.bind(this)}
                            className="btn btn-link">
                            Bags
                        </button>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-4">
                        <button onClick={this.handleButtonClickDrinkware.bind(this)}
                            className="btn btn-link">
                            Drinkware
                        </button>
                    </div>
                    <div className="col-4">
                        <button onClick={this.handleButtonClickOfficeTechnology.bind(this)}
                            className="btn btn-link">
                            Office/Technology
                        </button>
                    </div>
                    <div className="col-4">
                        <button onClick={this.handleButtonClickWriting.bind(this)}
                            className="btn btn-link">
                            Writing
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

export default withRouter(ProductList);