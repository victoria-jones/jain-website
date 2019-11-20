import React, { Component } from 'react';
import Donations from './components/donations';
import Instagram from './components/instagram';

class HomePage extends Component {

  render() {

    return (
      <div>
        <section id="hero">
          <div id="heroWrapper">
            <h2 className="heroTitle pageTitle">Sarah <span>Jain</span></h2>
            <h3>published model &<br />  hash sommelier</h3>
          </div>
          <img src="images/icons/logo.svg" title="Sarah Jain logo" alt="Sarah Jain leaf logo"/>
        </section>

        <div className="heroOval">
        </div>

        <section id="photos">
          <div class="plantImgHolder pihTop">
            <h3>Photos</h3>
            <img src="images/icons/background_plant.svg" id="bgPlant" alt="Sarah Jain leaf logo"/>
          </div>

          <Instagram />

          <div class="plantImgHolder pihBottom">
            <p>
              <a href="https://www.instagram.com/sarahjain420/">
              <img src="images/icons/insta_icon.svg" alt="instagram icon" id="hpHandle"/>
              @sarahjain420</a>
            </p>
            <img src="images/icons/background_plant.svg" id="bgPlantBottom" alt="Sarah Jain leaf logo"/>
          </div>
        </section>

        <Donations />
      </div>
    )
  }
}

export default HomePage;
