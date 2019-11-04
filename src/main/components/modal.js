import React, { Component } from 'react';

class Modal extends Component {

  render() {
    if (this.props.displayModal) {
      return(

          <div class="modalWrapper">
            <section id="modal">
              <img src="images/icons/close_icon.svg" class="closeBtn" alt="close window button" title="close button"
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
    
  }

  fillForm() {

  }
}

export default Modal;
