import { Button } from "@mui/material";
import React from "react";
import "../../styles/footer.css";
function Footer() {
  return (
    <div className="footer" id="footer">
      {/* <div className="f-quote-container">
        <p className="quote-text">Get in touch with the best in the field</p>
        <Button variant="contained" className="quoteBtn">
          Call Us
        </Button>
      </div> */}
      <div className="footer-container">
        <div>
          <p className="footer-title">
            <span>Source Monks</span>
          </p>
          <p className="footer-desc">
            “knowledge is not skill, knowledge plus ten thousand times is skill”
            is what we believe. The team at Source Monks has years of experience
            in the field of Information Technology which provides services to
            the clients seeking expertise in analysis, design, development,
            testing, deployment & support.
          </p>
        </div>
        <div className="footer-contact">
          <p className="footer-subtitle">
            <span>Addresses</span>
          </p>
          <p className="footer-address">
            1079 Crescent Moon Dr, Fort Mill, SC, 29715
          </p>

          {/* <p className="footer-mobile">
            <a href="tel:9676335577">+91 9676335577</a>
          </p> */}
          {/* <p className="footer-mobile"></p> */}
          <p className="footer-mobile">hr@sourcemonks.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
