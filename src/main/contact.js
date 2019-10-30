import React, { Component } from 'react';

class ContactPage extends Component {

  render() {
    return (
      <div>
      <h2 className="pageTitle pageTitleMrg">Contact</h2>

      <div className="pageOval">
      </div>

      <section id="contactForm">
        <form>
          <section id="contactReason">
            <h3>Reason for contact:</h3>
            <button>Questions</button>
            <button>Comments</button>
            <button>Booking</button>
          </section>

          <section id="emailForm">
          <h3>Email me:</h3>
          <div id="emailFormBg">
            <label for="name">Name</label>
            <input id="name" type="text" placeholder="Name" />
            <label for="email">Email</label>
            <input id="email" type="email" placeholder="Email" />
            <label for="message">Message</label>
            <textarea id="message" placeholder ="Message"></textarea>
            <button>Send</button>
          </div>
          </section>
        </form>
      </section>

      <section class="cta" id="socialMedia">
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
