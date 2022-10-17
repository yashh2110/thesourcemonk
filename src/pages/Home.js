import React, { useEffect } from "react";
import GetQuote from "../components/home/GetQuote";
import Hero from "../components/home/Hero";
import RecentWorks from "../components/home/RecentWorks";
import Services from "../components/home/Services";
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
      <GetQuote />
      <RecentWorks />
      <Services />
    </div>
  );
}

export default Home;
