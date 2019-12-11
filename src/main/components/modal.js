import React, { Component } from 'react';

class Modal extends Component {

  componentDidUpdate() {
    //console.log(this.props.fillModal);

    if(this.props.displayModal){
      if(this.props.fillModal.thankYou) {
        //this.fillThankYou();
      } else if(this.props.fillModal.form) {
        //this.fillForm();
      } else {
      }
    }

  }

  render() {
    if(this.props.fillModal.empty) {
      return(
        <div className="modalWrapper">
          <section id="modal">
            <img src="images/icons/close_icon.svg" className="closeBtn" alt="close window button" title="close button"
                onClick={() => this.props.showModal('close', 'na')}
            />
            <h2 id="modalHead">Modal Header</h2>
            <section id="modalBody">
            </section>
          </section>
        </div>
      );
    } else if (this.props.fillModal.thankYou) {
      return(
        <div className="modalWrapper">
          <section id="modal">
            <img src="images/icons/close_icon.svg" className="closeBtn" alt="close window button" title="close button"
                onClick={() => this.props.showModal('close', 'na')}
            />
            <h2 id="modalHead">Thank You</h2>
            <section id="modalBody">
              <p id="thankYouMsg">Your message has been sent. I will be in touch through email soon!</p>
              <button onClick={() => this.props.showModal('close', 'na')}>
                ok
              </button>
            </section>
          </section>
        </div>
      );
    } else if (this.props.fillModal.form) {
      return(
        <div className="modalWrapper">
          <section id="modal">
            <img src="images/icons/close_icon.svg" className="closeBtn" alt="close window button" title="close button"
                onClick={() => this.props.showModal('close', 'na')}
            />
            <h2 id="modalHead">Request A Booking</h2>
            <section id="modalBody" className="contactForm">
                <p id="advised"><u>*please be advised</u>: I will  only travel to locations that allow the carry and use of
                  medical marijuana.</p>
                <section id="bookingForm" className="emailForm">
                  <form id="modalForm">
                    <h3>selected calendar date goes here</h3>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" name="name" placeholder="Name" />
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="Email" />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder ="Please include information about the booking"></textarea>
                    <button type="button" id="contactFormSend"
                            onClick={() => this.props.showModal('open', 'contact')}>
                            Send
                    </button>
                  </form>
                </section>
            </section>
          </section>
        </div>
      );
    } else if (this.props.fillModal.faq) {
      return(
        <div className="modalWrapper">
          <section id="modal">
            <img src="images/icons/close_icon.svg" className="closeBtn" alt="close window button" title="close button"
                onClick={() => this.props.showModal('close', 'na')}
            />
            <h2 id="modalHead">FAQ</h2>
            <section id="modalBody">
              <ol>
                <li>FAQ number one goes here</li>
                  <ul>number one follow up answer goes here</ul>
                <li>FAQ number one goes here</li>
                  <ul>number one follow up answer goes here</ul>
                <li>FAQ number one goes here</li>
                  <ul>number one follow up answer goes here</ul>
                <li>FAQ number one goes here</li>
                  <ul>number one follow up answer goes here</ul>
                <li>FAQ number one goes here</li>
                  <ul>number one follow up answer goes here</ul>
                <li>FAQ number one goes here</li>
                  <ul>number one follow up answer goes here</ul>
                <li>FAQ number one goes here</li>
                  <ul>number one follow up answer goes here</ul>
                <li>FAQ number one goes here</li>
                  <ul>number one follow up answer goes here</ul>
                <li>FAQ number one goes here</li>
                  <ul>number one follow up answer goes here</ul>
                <li>FAQ number one goes here</li>
                  <ul>number one follow up answer goes here</ul>
              </ol>
              <button id="faqOk" onClick={() => this.props.showModal('close', 'na')}>
                ok
              </button>
            </section>
          </section>
        </div>
      );
    }

  }

  /* fillThankYou() {
    let modalH2 = document.getElementById("modalHead");
    let modalBody = document.getElementById("modalBody");

    //first empty anything in the modal
    modalBody.innerHTML = "";

    modalH2.innerHTML = "Thank you!";

    let modalP = document.createElement('p');
    modalP.innerHTML = "you message has been sent. I will be in touch through email soon!"
    modalBody.appendChild(modalP);

    let modalBtn = document.createElement('button');
    modalBtn.innerHTML = "ok";
    modalBody.appendChild(modalBtn);

    //modalBtn.addEventListener("click", () => this.props.showModal('close', 'na'), false);
    modalBtn.addEventListener("click", () => this.props.showModal('close', 'na'), false);

  }

  fillForm() {
    let modalH2 = document.getElementById("modalHead");
    let modalBody = document.getElementById("modalBody");

    //first empty anything in the modal
    modalBody.innerHTML = "";

    modalH2.innerHTML = "Request a booking"
  }*/
}

export default Modal;
