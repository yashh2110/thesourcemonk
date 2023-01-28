import React from "react";
import { Button } from "@mui/material";
import GetQuote from "./GetQuote";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Hero() {
  const navigate = useNavigate();
  return (
    <div id="hero">
      <div className="hero-container">
        <p className="hero-title">
          Sourcemonks<span className="hero-title-1">.com</span>
        </p>
        <p className="hero-desc">A Place For Everyone Who Deserves Better</p>
        <HashLink style={{ textDecoration: "none" }} smooth to="/#services">
          <Button variant="contained" className="hero-button">
            Our Services
          </Button>
        </HashLink>
        <GetQuote />
      </div>

      <div className="hero-background">
        <div className="hero-bg-overlay"></div>
      </div>
    </div>
  );
}

export default Hero;
