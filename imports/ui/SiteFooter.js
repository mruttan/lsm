import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { withTracker } from 'meteor/react-meteor-data';

import { Button } from 'react-bootstrap';


class SiteFooter extends React.Component {
  constructor(props) {
    super(props);
  };

  render(props) {
    const navImageSrc = this.props.isNavOpen ? '/images/x.svg' : '/images/bars.svg';
    return (
      <div className="footer">
        <div className="footer__content">
          <img className="footer__nav-toggle" src={navImageSrc} onClick={this.props.handleNavToggle} />
          <h1 className="footer__title">{this.props.title}</h1>
          <Link to="/" className="button button--link">HOME</Link>
          <Link to="/" className="button button--link">PRODUCTS</Link>      
          <Link to="/" className="button button--link">ABOUT</Link>
          <form className="searchbar">
            <input placeholder="Search for a Product"></input>
            <Button bsStyle="primary">Search</Button>
          </form>
        </div>
      </div>
    );
  }
}

SiteFooter.propTypes = {
  title: PropTypes.string.isRequired,
  handleNavToggle: PropTypes.func.isRequired
}

export default withTracker(() => {
  return {
    handleNavToggle: () => Session.set('isNavOpen', !Session.get('isNavOpen')),
    isNavOpen: Session.get('isNavOpen')
  };
})(SiteFooter);