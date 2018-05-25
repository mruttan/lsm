import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { withTracker } from 'meteor/react-meteor-data';

class SiteHeader extends React.Component {
  constructor(props) {
    super(props);
  };

  render(props) {
    const navImageSrc = this.props.isNavOpen ? '/images/x.svg' : '/images/bars.svg';
    return (
      <div className="header">
        <div className="header__content">
          <img className="header__nav-toggle" src={navImageSrc} onClick={this.props.handleNavToggle} />
          <h1 className="header__title">{this.props.title}</h1>
          <Link to="/" className="button button--link">Login</Link>
          <Link to="/" className="button button--link">Signup</Link>         
        </div>
      </div>
    );
  }
}

SiteHeader.propTypes = {
  title: PropTypes.string.isRequired,
  handleNavToggle: PropTypes.func.isRequired
}

export default withTracker(() => {
  return {
    handleNavToggle: () => Session.set('isNavOpen', !Session.get('isNavOpen')),
    isNavOpen: Session.get('isNavOpen')
  };
})(SiteHeader);