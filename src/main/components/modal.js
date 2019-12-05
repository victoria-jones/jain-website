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
              <p>Your message has been sent. I will be in touch through email soon!</p>
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
            <section id="modalBody">
              <h3>selected day goes here</h3>
              <section id="formWrapper">
                <form>
                  <p>form goes here</p>
                </form>
              </section>
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
