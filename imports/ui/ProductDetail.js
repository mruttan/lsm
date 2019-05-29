import React from 'react';
import { withRouter } from 'react-router-dom';

export const ProductDetail = ({ product }) => {
    const { title, link } = product;
  
    return(
        // <li>
        //     <div>
        //         <img src={props.product.link} />
        //     </div>
        //     <div>
        //         <h4>
        //             {props.product.title}
        //         </h4>
        //     </div>
        // </li>

        <div>
            <img className="product-image" src={link} />
            <div>
                <h3>{title}</h3>
                {/* <ul className="list-group">
                    <li className="list-group-item">Email: {title}</li>
                    <li className="list-group-item">Phone: {title}</li>
                </ul> */}
            </div>
        </div>
    );

}


export default withRouter(ProductDetail);