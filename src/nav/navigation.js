import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Nav extends Component {

  render() {

    return (
          <nav>
            <ul class="navMenu">
              <li link="/">home</li>
              <li link="about_me">about me</li>
              <li link="contact">contact</li>
              <li link="booking">booking</li>
            </ul>
          </nav>
    );
  }

}

export default Nav;
