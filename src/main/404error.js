import React, { Component } from 'react';

class Error404 extends Component {

  render() {

    return (
      <section id="404error">
        <h1>Uh Oh! That Page Doesn't Exist!</h1>
        <p>There seems to be a problem with your request!</p>
        <p>If you think you have reached this page by mistake let me know.</p>
      </section>
    );
  }
}

export default Error404;
