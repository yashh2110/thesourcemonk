import React, { useEffect } from "react";
import FeaturedWork from "../components/home/FeaturedWork";
import GetQuote from "../components/home/GetQuote";
import Hero from "../components/home/Hero";
import OurBelief from "../components/home/OurBelief";
import Services from "../components/home/Services";
import Testimonial from "../components/home/Testimonial";
import "../styles/home.css";
function Home() {
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      console.log(window.scrollY);
      const container = document.querySelector(".hero-background");
      const header = document.querySelector(".header");
      container.style.top = -window.scrollY / 3 + "px";
      if (window.scrollY > 188) {
        header.classList.add("header-scroll");
        // headerMenuItem.classList.add = "menu-container-lg-scroll";
      } else {
        header.classList.remove("header-scroll");
      }
    });
  }, []);
  return (
    <div className="home-container">
      <Hero />
      {/* <GetQuote /> */}
      <OurBelief />
      <Services />
      <FeaturedWork />
      {/* <Testimonial /> */}
    </div>
  );
}

export default Home;
