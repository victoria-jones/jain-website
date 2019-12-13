import React, { Component } from 'react';

class Instagram extends Component {

  componentDidMount() {
    //embed social function
    //this isn't working
    (function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/embedscript/in.js"; d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialInstagramScript"));

  }
  render() {
    //embed social integration
    return (
      <section id="igFeed">
        <div className='embedsocial-instagram' data-ref="77cf80906a1fcb9ba2f18d85931f8c34fb342232">
        </div>
      </section>
    );
  }

}

export default Instagram;
