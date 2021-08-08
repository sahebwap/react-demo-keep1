import React from "react";

const date = new Date().getFullYear();

function Footer(){
  return <div>
  <footer id="footer">

    <center>
      <div class="contact-me">
        <h3>Get In Touch</h3>
        <p>© Copyright {date}</p>
      </div>

    </center>

  </footer>
<div class="go-on-top">
  <a href="#title"><i class="fa fa-arrow-circle-up fa-lg" aria-hidden="true"></i> Go on Top</a>
</div>
  </div>;
}

export default Footer;
