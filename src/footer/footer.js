import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SocialNav from '../nav/socialNav';

class Footer extends Component {

  render() {
    return (
      <footer>
        <small>Sarah Jain</small><img src="images/icons/logo.svg" title="Sarah Jain logo"/><span>&copy;</span>
        <div class="footerOval">
        </div>
        <SocialNav addClass="socialNavFt"/>
      </footer>
    )
  }
}

export default Footer;
