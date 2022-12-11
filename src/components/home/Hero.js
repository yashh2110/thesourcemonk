import React from "react";
import { Button } from "@mui/material";
import GetQuote from "./GetQuote";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  return (
    <div id="hero">
      <div className="hero-container">
        <p className="hero-title">
          The Sourcemonk<span className="hero-title-1">.com</span>
        </p>
        <p className="hero-desc">A Place For Everyone Who Deserves Better</p>

        <Button
          variant="contained"
          className="hero-button"
          onClick={() => navigate("/#services")}>
          Our Services
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
