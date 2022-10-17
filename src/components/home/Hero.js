import React from "react";
import { Button } from "@mui/material";
import GetQuote from "./GetQuote";
function Hero() {
  return (
    <div>
      <div className="hero-container">
        <p className="hero-title">
          <span className="hero-title-1">Makineni</span> Projects
        </p>
        <p className="hero-desc">We make your dreams a reality</p>
        <Button variant="contained" className="hero-button">
          Our Work
        </Button>
        <GetQuote />
      </div>

      <div className="hero-background">
        <div className="hero-bg-overlay"></div>
      </div>
    </div>
  );
}

export default Hero;
