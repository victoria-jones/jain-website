import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'testemail@email.com',
      name: 'testName',
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
      <Slide top>
        <h2 className="pageTitle pageTitleMrg">Contact</h2>

        <div className="pageOval">
        </div>
      </Slide>

      <section className="contactForm">
        <form>
          <section id="contactReason">
            <h3>Reason for contact:</h3>
            <button type="button">Questions</button>
            <button type="button">Comments</button>
            <button type="button">Booking</button>
          </section>

          <section className="emailForm">
            <div id="emailFormBg">
              <h3>Email me:</h3>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" placeholder="Name" />
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="Email" />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder ="Message"
                onChange={this.handleChange}
                value={this.state.message}></textarea>
              <button type="button" id="contactFormSend"
                      //onClick={() => this.props.showModal('open', 'contact')}>  move this to happen after submission
                      onClick={this.handleSubmit}>
                      Send
              </button>
            </div>
          </section>
        </form>
      </section>

      <section className="cta" id="socialMedia">
      <p><span className="ctaSpan">You can find me on social media too! </span>
      Get in the know, stay up to date:</p>
        <ul>
          <li><img src="images/icons/fb_icon.svg" alt="facebook icon"/></li>
          <li><img src="images/icons/insta_icon.svg" alt="instagram icon"/></li>
          <li><img src="images/icons/mm_icon.svg" alt="model mayhem icon"/></li>
        </ul>
        <img src="images/icons/bg_longleaf.svg" className="bgcta" alt="Sarah Jain leaf logo"/>
      </section>
      </div>
    )
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  handleSubmit(e) {
    const templateId = 'template_FZWn50bz';
    const serviceId = "default_service";
    const template_params = {
      reply_to: this.state.email,
      from_name: this.state.name,
      message_html: this.state.message
    };
    this.sendFeedback(templateId, serviceId, template_params);
  }

  sendFeedback(templateId, serviceId, template_params) {
    window.emailjs.send(serviceId, templateId, template_params)
        .then(res => { console.log('email has successfully sent') })
        .catch(err => console.error('uh oh. email failed: ', err));
  }

}

export default ContactPage;
