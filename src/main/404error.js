import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Error404 extends Component {

  render() {

    return (
      <div>
        <h2 className="pageTitle pageTitleMrg">404 Error</h2>

        <div className="pageOval">
        </div>

        <section id="error404">
          <h2>Uh Oh! That Page Doesn't Exist!</h2>
          <p>There seems to be a problem with your request.</p>
          <p>If you think you have reached this page by mistake <Link to="contact">let me know</Link>.</p>
        </section>

      </div>
    );
  }
}

export default Error404;
