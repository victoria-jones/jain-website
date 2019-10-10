import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Nav extends Component {

  render() {

    return (
          <nav>
            <ul class="navMenu">
              <li onClick={() => this.props.changeTitle('Sarah Jain')}><Link to="/">home</Link></li>
              <li onClick={() => this.props.changeTitle('About Me')}><Link to="/about_me">about me</Link></li>
              <li onClick={() => this.props.changeTitle('Contact')}><Link to="/contact">contact</Link></li>
              <li onClick={() => this.props.changeTitle('Booking')}><Link to="/booking">booking</Link></li>
            </ul>
          </nav>
    );
  }
}

export default Nav;
