import React, { useEffect } from "react";
import Footer from "../components/common/Footer";
import "../styles/about.css";
function AboutUs() {
  useEffect(() => {
    const header = document.querySelector(".header");
    header.classList.add("header-scroll");
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      <p className="about-title">
        <span>About Us</span>
      </p>
      <div className="about-content">
        <div className="ourstory about-section">
          {/* <p className="about-subtitle">
            <span>Our Story</span>
          </p> */}
          <p className="about-desc">
            “Knowledge is not skill, knowledge plus ten thousand times is skill”
            is what we believe. The team at TheSourcemonk has years of
            experience in the field of Information Technology which provide
            services to the clients seeking expertise in analysis, design,
            development, testing, deployment & support. We ensure the highest
            levels of quality, professionalism and satisfaction to our clients.
            Simply put, we have the best skill to support you in your journey.
          </p>
        </div>
        <div className="swimmingpool about-section">
          <p className="about-subtitle ">
            <span>Our Vision</span>
          </p>
          <p className="about-desc">
            We aspire to become the premier provider of IT services by exceeding
            our client’s expectations in delivering software according to their
            business needs.
          </p>
        </div>
        <div className="buildings about-section">
          <p className="about-subtitle ">
            <span>Our Mission</span>
          </p>
          <p className="about-desc">
            To consistently deliver innovative & creative solutions to our
            clients with high quality and cost effective software development
            solutions.
          </p>
        </div>
        <div className="buildings about-section">
          <p className="about-subtitle ">
            <span>Our Core Values</span>
          </p>
          <ul className="about-desc">
            <li>Teamwork</li>
            <li>Quality</li>
            <li>Honesty</li>
            <li>Respect</li>
            <li>Excellence</li>
          </ul>
        </div>
      </div>
      <br></br>
      <br></br>

      <Footer />
      <br></br>
    </div>
  );
}

export default AboutUs;
