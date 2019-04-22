import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

export const ProductDetail = (props) => {
  
    return(
        <li>
            <div>
                <img src={props.image.link} />
            </div>
            <div>
                <h4>
                    {props.image.title}
                </h4>
            </div>
        </li>
    );

}


export default withRouter(ProductDetail);