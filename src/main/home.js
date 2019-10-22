import React, { Component } from 'react';
import Donations from './components/donations';
import Instagram from './components/instagram';

class HomePage extends Component {

  render() {

    return (
      <div>
          <section id="hero">
            <div id="heroWrapper">
              <h2 className="heroTitle pageTitle">Sarah Jain</h2>
              <h3>published model &<br />  hash sommelier</h3>
            </div>
            <img src="images/icons/logo.svg" title="Sarah Jain logo" alt="Sarah Jain leaf logo"/>
          </section>

        <div className="heroOval">
        </div>

        <section id="photos">
          <h3>Photos</h3>
          <Instagram />
          <img src="images/icons/background_plant.svg" id="bgPlant" alt="Sarah Jain leaf logo"/>
        </section>

        <Donations />
      </div>
    )
  }
}

export default HomePage;
