import React, { Component } from 'react';


class SocialNav extends Component {
  render() {
    return (
      <section className={`socialNav ${this.props.addClass}`}>
        <ul>
          <li><img src="images/icons/fb_icon.svg" alt="facebook icon"/></li>
          <li><img src="images/icons/insta_icon.svg" alt="instagram icon"/></li>
          <li><img src="images/icons/mm_icon.svg" alt="model mayhem icon"/></li>
        </ul>
      </section>
    );
  }
}

export default SocialNav;
