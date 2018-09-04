import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// function Header() {
//   return (
//     <div>
//       <h1>{props.branding}</h1>
//     </div>
//   );
// }

const Header = props => {
  return (
    <nav
      className="navbar-expand-lg mb-3 navbar navbar-light"
      style={{ backgroundColor: '#e3f2fd' }}
    >
      <Link className="navbar-brand" to="/">
        {props.branding}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fas fa-home" /> Home{' '}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/add" className="nav-link">
              <i className="fas fa-plus" />
              Add
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              <i className="fas fa-question" />
              About
            </Link>
          </li>
          {/* <a class="nav-item nav-link" href="#">
          </li>
              Features
            </a>
            <a class="nav-item nav-link" href="#">
              Pricing
            </a>
            <a class="nav-item nav-link disabled" href="#">
              Disabled
            </a> */}
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
