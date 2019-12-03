import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class ContactPage extends Component {

  render() {
    return (
      <div>
      <Slide top>
        <h2 className="pageTitle pageTitleMrg">Contact</h2>

        <div className="pageOval">
        </div>
      </Slide>

      <section id="contactForm">
        <form>
          <section id="contactReason">
            <h3>Reason for contact:</h3>
            <button type="button">Questions</button>
            <button type="button">Comments</button>
            <button type="button">Booking</button>
          </section>

          <section id="emailForm">
          <h3>Email me:</h3>
          <div id="emailFormBg">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" placeholder="Name" />
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Email" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder ="Message"></textarea>
            <button type="button" id="contactFormSend"
                    onClick={() => this.props.showModal('open', 'contact')}>
                    Send
            </button>
          </div>
          </section>
        </form>
      </section>

      <section className="cta" id="socialMedia">
      <p>Check me out on social media too!</p>
        <ul>
          <li><img src="images/icons/fb_icon.svg" alt="facebook icon"/></li>
          <li><img src="images/icons/insta_icon.svg" alt="instagram icon"/></li>
          <li><img src="images/icons/mm_icon.svg" alt="model mayhem icon"/></li>
        </ul>
      </section>
      </div>
    )
  }
}

export default ContactPage;
