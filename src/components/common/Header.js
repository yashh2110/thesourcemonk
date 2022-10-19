import React from "react";
import { Link as Rlink } from "react-router-dom";
import { Link } from "react-scroll";
import { HashLink } from "react-router-hash-link";
import "../../styles/header.css";
function Header() {
  return (
    <div className="header">
      <Rlink className="header-title" style={{ textDecoration: "none" }} to="/">
        Makineni Projects
      </Rlink>
      <div className="menu-container-lg">
        <Rlink
          activeClass="menu-item-active"
          className="menu-item"
          to="aboutus"
        >
          About Us
        </Rlink>
        <Rlink className="menu-item" to="works">
          Our Work
        </Rlink>
        <HashLink className="menu-item" smooth to="/#services">
          Services
        </HashLink>
        <HashLink className="menu-item" smooth to="/#featured">
          Featured Works
        </HashLink>
        <HashLink className="menu-item" smooth to="/#footer">
          Contact Us
        </HashLink>
      </div>
    </div>
  );
}

export default Header;
