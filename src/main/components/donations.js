import React, { Component } from 'react';

class Donations extends Component {

  render() {
    return (
      <section className="donations">
        <section id="donationInfo">
          <h2>Donate to nature</h2>
          <h3>let's make a difference together</h3>
          <p>Talk about how passionate your are about preseving the beauty of nature.
          Be sincere and ensure it doesn't sound like self boasting. This is a chance
          for potential clients to see <u>more</u> of you beyond the model. By clicking
          below you will be redirected to the <a href="https://www.worldwildlife.org">WWF</a>(World Wildlife Foundation)
          to make a personal donation.</p>
          <p><small>I am not compensated in anyway by endorsing WWF or
          for your donation. I do this soley out of my passion for nature.</small></p>
          <button>donate</button>
        </section>
      </section>
    )
  }
}

export default Donations;
