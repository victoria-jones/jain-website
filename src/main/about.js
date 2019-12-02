import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import Donations from './components/donations';


class AboutPage extends Component {
  render() {
    return (
      <div>
      <Slide top cascade>
        <div>
          <h2 className="pageTitle">About Me</h2>
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

          <div className="heroOval aboutOval">
          </div>
        </div>
      </Slide>

        <section id="specialties">
          <ul>
          <li>(image goes here)<br />specialty one</li>
          <li>(image goes here)<br />specialty two</li>
          <li>(image goes here)<br />specialty three</li>
          </ul>
        </section>

        <section className="cta" id="bookMe">
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
