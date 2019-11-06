import React, { Component } from 'react';

class Modal extends Component {

  render() {
    if (this.props.displayModal) {
      return(

          <div className="modalWrapper">
            <section id="modal">
              <img src="images/icons/close_icon.svg" className="closeBtn" alt="close window button" title="close button"
                  onClick={() => this.props.showModal('close')}
              />
              <h2 id="modalHead">Modal Header</h2>
              <section id="modalBody">
              </section>
            </section>
          </div>

      );
    } else {
      return null;
    }
  }

  fillThankYou() {
    let modalH2 = document.getElementById("modalHead");
    let modalBody = document.getElementById("modalBody");

    modalH2.innerHTML = "Thank you!";

    let modalP = document.createElement('p');
    modalP.innerHTML = "you message has been sent. I will be in touch through email soon!"
    modalBody.appendChild(modalP);

    let modalBtn = document.createElement('button');
    modalBtn.innerHTML = "ok";
    modalBody.appendChild(modalBtn);

  }

  fillForm() {
    let modalH2 = document.getElementById("modalHead");
    let modalBody = document.getElementById("modalBody");

    modalH2.innerHTML = ""
  }

  removeFill() {
    document.getElementById("modalHead").innerHTML = "";
    document.getElementById("modalBody").innerHTML = "";
  }
}

export default Modal;
