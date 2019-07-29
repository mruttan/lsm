import React from 'react';
import { withRouter } from 'react-router-dom';

export const BrandDetail = ({ brand }) => {
    const { img, link } = brand;

    return(
        <li className="brands-item my-auto text-center col-6 col-md-4 col-lg-2">
            <a href={link}>
                <img className="brand-image pb-2" src={img}/>
            </a>
        </li>
    );
}


export default withRouter(BrandDetail);