import { Button } from "@mui/material";
import React from "react";
import "../../styles/footer.css";
function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="f-quote-container">
        <p className="quote-text">Get in touch with the best in the field</p>
        <Button variant="contained" className="quoteBtn">
          Call Us
        </Button>
      </div>
      <div className="footer-container">
        <div>
          <p className="footer-title">
            <span>Makineni Projects</span>
          </p>
          <p className="footer-desc">
            Makineni Projects has been designing and installing world class
            sports surfaces for institutions like stadiums, clubs, gymnasiums,
            schools, universities, hotels and cooperates using high class raw
            material & modern technology with its well-trained professional
            teams
          </p>
        </div>
        <div className="footer-contact">
          <p className="footer-subtitle">
            <span>Addresses</span>
          </p>
          <p className="footer-address">
            Plot No. A-1, BHEL, AIE, RC Puram, Hyderabad -500032
          </p>
          <p className="footer-address">
            Makeneni Health Club, 1st lane, Vigneswara Nagar, Ring Road Guntur
            522034
          </p>
          <p className="footer-address">
            Sri Sai Bhaskara Enclave, D.No 21-32/7, Milestone center, Gollapudi,
            Vijayawada-521225
          </p>

          <p className="footer-mobile">
            <a href="tel:9676335577">+91 9676335577</a> ,{" "}
            <a href="tel:9963335577">+91 9963335577</a>
          </p>
          {/* <p className="footer-mobile"></p> */}
          <p className="footer-mobile">makineniinfra@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
