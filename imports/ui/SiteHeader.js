import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';



class SiteHeader extends React.Component {
  constructor(props) {
    super(props);
  };

  render(props) {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="#">{this.props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
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
          <div class="input-group ml-auto col-sm-4 custom-nav-search">
            <input type="text" class="form-control" placeholder="Search"/>
            <div class="input-group-append">
              <button class="btn btn-success" type="submit">Go</button>
            </div>
          </div>
          {/* <form class="form-inline ml-auto" action="">
            <input class="form-control mr-sm-2" type="text" placeholder="Search"/>
            <button class="btn btn-success" type="submit">Search</button>
          </form> */}
        </div>
      </nav>
    );
  }
}

SiteHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default withRouter(SiteHeader);