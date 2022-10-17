import React from "react";
import { Link } from "react-router-dom";
import "../../styles/header.css";
function Header() {
  return (
    <div className="header">
      <div className="header-title">Makineni Projects</div>
      <div className="menu-container-lg">
        <Link className="menu-item">About Us</Link>
        <Link className="menu-item">Our Work</Link>
        <Link className="menu-item">Contact Us</Link>
        <Link className="menu-item">Services</Link>
        <Link className="menu-item">Terms</Link>
      </div>
    </div>
  );
}

export default Header;
