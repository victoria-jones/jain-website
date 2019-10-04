import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HomePage extends Component {

  render() {
    return (
      <div>
        <h1>home page title</h1>

        <section id="hero">
          <p>the hero section. the banner image, website title (sarah jain),
          what she does.</p>
        </section>

        <section id="photos">
          <p>instagram API goes here. displays 9 photos (most recent).
          clicking on them should take user to the post.</p>
        </section>

        <section class="donations">
          <p>donation section goes here.</p>
          <p>create a donations component and insert it here.</p>
        </section>
      </div>
    )
  }
}

export default HomePage;
