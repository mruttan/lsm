import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';



class SiteHeader extends React.Component {
  constructor(props) {
    super(props);
  };

  render(props) {
    return (
      <nav className="navbar navbar-dark fixed-top navbar-expand-md custom-nav">
        <div className="container">

          {/* for cleaning up nav, need to apply styles to the link tags instead of img tags I think */}
          <Link className="navbar-brand" to="/">
            <img className="custom-navbar-logo" src="/images/Lions-Share-Logo-GoldHead.png" alt="TitleLogo" />
          </Link>
          
          <Link className="navbar-brand ml-auto d-block d-md-none custom-nav-mr" to="/">
            <img className="lsmhockeylogo" src="/images/logos/LionsShareHockeyLogo.png" alt="TitleLogo" />
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#toggleNav"
            aria-controls="toggleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse flex-grow-0" id="toggleNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/about" className="nav-link">About Us</Link>
              </li>
              <li className="nav-item active">
                <Link to="/products" className="nav-link">Products</Link>
              </li>
              <li className="nav-item active">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </div> {/* collapse */}

          <Link className="navbar-brand d-none d-md-block" to="/">
            <img className="custom-navbar-logo lsmhockeylogo" src="/images/logos/LionsShareHockeyLogo.png" alt="TitleLogo" />
          </Link>



        </div> {/* container */}
      </nav> //nav
    );
  }
}

SiteHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default withRouter(SiteHeader);