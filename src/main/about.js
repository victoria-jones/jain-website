import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Donations from './components/donations';


class AboutPage extends Component {
  render() {
    return (
      <div>
        <h2 class="pageTitle">About Me</h2>
        <section id="aboutMe">
          <p>about me bio area about me bio area. about me bio area.about me bio area.
          about me bio area. about me bio area. about me bio area.about me bio area.about me bio area.
          about me bio area. about me bio area.about me bio area. about me bio area.
          about me bio area. about me bio area.</p>
          <p>about me bio area about me bio area. about me bio area.about me bio area.
          about me bio area. about me bio area. about me bio area.about me bio area.about me bio area.
          about me bio area. about me bio area.about me bio area. about me bio area.
          about me bio area. about me bio area.about me bio area about me bio area. about me bio area.about me bio area.
          about me bio area. about me bio area. about me bio area.about me bio area.about me bio area.
          about me bio area. about me bio area.about me bio area. about me bio area.
          about me bio area. about me bio area.</p>
          <p>about me bio area. about me bio area about me bio area. about me bio area.about me bio area.
          about me bio area. about me bio area. about me bio area.about me bio area.about me bio area.
          about me bio area. about me bio area.about me bio area. about me bio area.
          about me bio area. about me bio area.</p>

          <p>all filler stuff.</p>
        </section>

        <div class="heroOval">
        </div>

        <section id="specialties">
          <ul>
          <li>(image goes here)<br />specialty one</li>
          <li>(image goes here)<br />specialty two</li>
          <li>(image goes here)<br />specialty three</li>
          </ul>
        </section>

        <section id="bookMe">
          <p>the book me CTA and area.the book me CTA and area.the book me CTA and area.
          the book me CTA and area.the book me CTA and area.</p>
          <Link to="/booking"><button>book me</button></Link>
        </section>

        <Donations />
      </div>
    );
  }
}

export default AboutPage;
