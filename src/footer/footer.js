import React, { Component } from 'react';
import SocialNav from '../nav/socialNav';

class Footer extends Component {

  render() {
    return (
      <footer>
        <small>Sarah Jain</small><img src="images/icons/logo.svg" title="Sarah Jain logo" alt="Sarah Jain leaf logo"/><span>&copy;</span>
        <div className="footerOval">
        </div>
        <SocialNav addClass="socialNavFt"/>
      </footer>
    )
  }
}

export default Footer;
