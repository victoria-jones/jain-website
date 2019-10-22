import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

  render() {

    return (
          <nav>
            <ul className="navMenu">
              <li><Link to="/">home</Link></li>
              <li><Link to="/about_me">about me</Link></li>
              <li><Link to="/contact">contact</Link></li>
              <li><Link to="/booking">booking</Link></li>
            </ul>
          </nav>
    );
  }
}

export default Nav;
