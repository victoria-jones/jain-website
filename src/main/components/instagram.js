import React, { Component } from 'react';
import Script from 'react-inline-script';

class Instagram extends Component {
//<div class='embedsocial-instagram' data-ref="77cf80906a1fcb9ba2f18d85931f8c34fb342232"></div>
//<script>(function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/embedscript/in.js"; d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialInstagramScript"));</script>
render() {
  return (
    <section id="igFeed">
      <div class='embedsocial-instagram' data-ref="77cf80906a1fcb9ba2f18d85931f8c34fb342232">
      </div>
      <Script>
        {`
          (function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/embedscript/in.js"; d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialInstagramScript"));
        `}
      </Script>
    </section>
  );
}

}

export default Instagram;
