import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

  render() {

    return (
          <nav>
            <ul className="navMenu">
              <li><Link to="/" onClick={() => this.props.showMobileMenu("close")}>home</Link></li>
              <li><Link to="/about_me" onClick={() => this.props.showMobileMenu("close")}>about me</Link></li>
              <li><Link to="/contact" onClick={() => this.props.showMobileMenu("close")}>contact</Link></li>
              <li><Link to="/booking" onClick={() => this.props.showMobileMenu("close")}>booking</Link></li>
            </ul>
            <div className="navOval">
            </div>
          </nav>
    );
  }
}

export default Nav;
