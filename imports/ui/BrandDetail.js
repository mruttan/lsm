import React from 'react';
import { withRouter } from 'react-router-dom';

export const BrandDetail = ({ brand }) => {
    const { img, link } = brand;

    return(
        <li className="brands-item my-auto">
            <a href={link}>
                <img className="brand-image" src={img}/>
            </a>
        </li>
    );
}


export default withRouter(BrandDetail);