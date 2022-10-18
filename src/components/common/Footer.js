import { Button } from "@mui/material";
import React from "react";
import "../../styles/footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="f-quote-container">
        <p className="quote-text">Get in touch with the best in the field</p>
        <Button variant="contained" className="quoteBtn">
          Get Quote
        </Button>
      </div>
      <div className="footer-container">
        <div>
          <p className="footer-title">
            <span>Makineni Projects</span>
          </p>
          <p className="footer-desc">
            The best construction company. We promise the quality in low cost.
            Call us to make your dream a reality
          </p>
        </div>
        <div className="footer-contact">
          <p className="footer-subtitle">
            <span>Address</span>
          </p>
          <p className="footer-address">
            3rd Flr,338, Room No 36, Katha Bazar, Masjid Bunder(e), Mumbai,
            400009, India
          </p>
          <p className="footer-mobile">+91 9345434543</p>
          <p className="footer-mobile">Yashwanth.muddana@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
