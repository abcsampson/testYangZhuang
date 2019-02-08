import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

class Header extends React.Component {
  static propTypes = {
    subpage: PropTypes.string,
  };

  renderLink(linkTo, text) {
    const isActive = (this.props.subpage === linkTo);
    return (
      <li className={isActive ? 'active' : ''}>
        <Link to={linkTo}>
          {text}
        </Link>
      </li>
    );
  }

  render() {
    return (
      <div className="container">
        <h2>Yang Zhuang Orthography Converter</h2>
        <p>This tool converts between Liao and Lee orthography. The latter orthography has not been finalised and is subject to change.</p>
        <ul className="nav nav-tabs">
          {this.renderLink('/', 'Converter')}
          {this.renderLink('/documentation/', 'Documentation')}
        </ul>
      </div>
    );
  }
}

export default Header;
