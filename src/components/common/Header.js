import React from "react";
import { Link as Rlink } from "react-router-dom";
import { Link } from "react-scroll";
import "../../styles/header.css";
function Header() {
  return (
    <div className="header">
      <div className="header-title">Makineni Projects</div>
      <div className="menu-container-lg">
        <Link
          activeClass="menu-item-active"
          className="menu-item"
          smooth
          spy
          to="about"
        >
          About Us
        </Link>
        <Link
          activeClass="menu-item-active"
          className="menu-item"
          smooth
          spy
          to="work"
        >
          Our Work
        </Link>
        <Link
          activeClass="menu-item-active"
          className="menu-item"
          smooth
          spy
          to="contact"
        >
          Contact Us
        </Link>
        <Link
          activeClass="menu-item-active"
          className="menu-item"
          smooth
          spy
          to="services"
        >
          Services
        </Link>
        <Link
          activeClass="menu-item-active"
          className="menu-item"
          smooth
          spy
          to="featured"
        >
          Featured Works
        </Link>
      </div>
    </div>
  );
}

export default Header;
