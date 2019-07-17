import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';



class SiteHeader extends React.Component {
  constructor(props) {
    super(props);
  };

  render(props) {
    return (
      <nav className="navbar fixed-top navbar-expand-md navbar-light justify-content-around custom-nav">
        {/* for cleaning up nav, need to apply styles to the link tags instead of img tags I think */}
        <Link to="/">
          <img className="img-fluid custom-navbar-logo" src="/images/Lions-Share-Logo-GoldHead.png" alt="TitleLogo" />
        </Link>
        
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ml-lg-5" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="ml-lg-5">
                <img className="img-fluid custom-navbar-logo lsmhockeylogo" src="/images/logos/LionsShareHockeyLogo.png" alt="TitleLogo" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

SiteHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default withRouter(SiteHeader);