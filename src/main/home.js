import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Donations from './components/donations';

class HomePage extends Component {

  render() {

    return (
      <div>

          <section id="hero">
            <div id="heroWrapper">
              <h2 class="heroTitle pageTitle">Sarah Jain</h2>
              <h3>published model &<br />  hash sommelier</h3>
            </div>
            <img src="images/icons/logo.svg" title="Sarah Jain logo"/>
          </section>

        <div class="heroOval">
        </div>

        <section id="photos">
          <h3>Photos</h3>
          <p>instagram API goes here. displays 9 photos (most recent).
          clicking on them should take user to the post.</p>
          <img src="images/icons/background_plant.svg" id="bgPlant"/>
        </section>

        <Donations />
      </div>
    )
  }
}

export default HomePage;
