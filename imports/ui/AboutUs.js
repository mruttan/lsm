import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

export const AboutUs = () => {
    return (
        <div>
            <SiteHeader title="LSM" />
            <div className="container">
                <div className="row pt-4">
                    <h1>About Us</h1>
                </div>
                <div className="row">
                    <div className="col mx-auto">
                        <p>
                            At Lion’s Share our goal is to help you increase your brand's visibility, while generating the highest return on your investment.
                            Our friendly experienced team has access to thousands of quality promotional products.  We will take the time to define your
                            requirements, then make suggestions to maximize the impact of your custom order.
                        </p>
                        <p>
                            We practice excellent customer service in each detail to meet all of your needs and earn your trust.
                        </p>
                        <p>
                            We also offer quality Heat transfer, screen printing and embroidery!
                        </p>
                        <p>
                            We specialize in custom hockey association programs for apparel and uniforms.  Starting with putting together a
                            proposed program, pricing and terms, to fittings to production and finally delivery!  We have a full showroom and
                                store to accommodate our hockey association members.
                        </p>
                    </div>
                </div>
            </div>
            <SiteFooter />
        </div>
    );

}


export default withRouter(AboutUs);