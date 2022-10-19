import React from "react";
import { Button } from "@mui/material";
import GetQuote from "./GetQuote";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="hero-container">
        <p className="hero-title">
          <span className="hero-title-1">Makineni</span> Projects
        </p>
        <p className="hero-desc">We make your dreams a reality</p>

        <Button
          variant="contained"
          className="hero-button"
          onClick={() => navigate("/works")}
        >
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
