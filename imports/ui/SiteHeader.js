import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';



class SiteHeader extends React.Component {
  constructor(props) {
    super(props);
  };

  render(props) {
    return (
      <nav className="navbar navbar-expand-md bg-white navbar-light justify-content-center">
        <Link to="/">
          <img className="img-fluid custom-navbar-logo" src="/images/Lions-Share-Logo-GoldHead.jpg" alt="TitleLogo" />
        </Link>
        <Link to="/">
          <img className="img-fluid custom-navbar-logo lsmhockeylogo pr-5" src="/images/logos/LionsShareHockeyLogo.jpg" alt="TitleLogo" />
        </Link>
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse custom-nav ml-lg-5" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
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