import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class AboutPage extends Component {

  render() {
    return (
      <div>
        <h1> about me page</h1>

        <section id="aboutMe">
          <p>about me bio area.</p>
        </section>

        <section id="specialties">
          <p>the 3 icons specialties area</p>
        </section>

        <section id="bookMe">
          <p>the book me CTA and button</p>
        </section>

        <section class="donations">
          <p>donation section goes here.</p>
          <p>create a donations component and insert it here.</p>
        </section>
      </div>
    )
  }
}

export default AboutPage;
