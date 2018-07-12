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
        <img className="img-fluid custom-navbar-logo" src="/images/Lions-Share-Logo-GoldHead.jpg" alt="TitleLogo" />
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse custom-nav ml-lg-5" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                Services
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Heat Transfer</a>
                <a className="dropdown-item" href="#">Embroidery</a>
                <a className="dropdown-item" href="#">Custom Apparel</a>
                <a className="dropdown-item" href="#">Screen Printing</a>
                <a className="dropdown-item" href="#">Fulfillment</a>
                <a className="dropdown-item" href="#">E-Commerce</a>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Catalogues</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Contact</Link>
            </li>
          </ul>
          <div className="input-group ml-auto col-md-5 col-lg-6 custom-nav-search">
            <input type="text" className="form-control" placeholder="Search Products"/>
            <div className="input-group-append">
              <button className="btn btn-success" type="submit">Go</button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

SiteHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default withRouter(SiteHeader);