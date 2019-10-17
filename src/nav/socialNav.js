import React, { Component } from 'react';


class SocialNav extends Component {
  render() {
    return (
      <section class={`socialNav ${this.props.addClass}`}>
        <ul>
          <li><img src="images/icons/fb_icon.svg" /></li>
          <li><img src="images/icons/insta_icon.svg" /></li>
          <li><img src="images/icons/mm_icon.svg" /></li>
        </ul>
      </section>
    );
  }
}

export default SocialNav;
