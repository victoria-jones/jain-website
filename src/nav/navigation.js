import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Nav extends Component {

  render() {
    return (
          <nav>
            <ul class="navMenu">
              <li>home</li>
              <li>about me</li>
              <li>contact</li>
              <li>booking</li>
            </ul>
          </nav>
    )
  }
}

export default Nav;
