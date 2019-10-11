import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Donations from './components/donations';

class HomePage extends Component {

  render() {

    return (
      <div>
      <h2 class="heroTitle">Home page</h2>
        <section id="hero">
          <p>the hero section. the banner image, website title (sarah jain),
          what she does.</p>
        </section>

        <section id="photos">
          <p>instagram API goes here. displays 9 photos (most recent).
          clicking on them should take user to the post.</p>
        </section>

        <Donations />
      </div>
    )
  }
}

export default HomePage;
