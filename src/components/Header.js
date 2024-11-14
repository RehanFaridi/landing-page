// src/components/Header.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const Header = () => (
  <header>
    <div className="upperDiv">
      <div className="social-link">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faPinterest} />
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
      <div className="contact-link">
        <p> +911234567890 | support@landingpage.com </p>
      </div>
      <div className="request">
        <p> Request a Call </p>
      </div>
    </div>
    <div>
        
    </div>
  </header>
);

export default Header;
