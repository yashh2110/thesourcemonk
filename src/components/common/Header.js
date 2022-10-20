import React, { useState } from "react";
import { Link as Rlink } from "react-router-dom";
import { Link } from "react-scroll";
import { HashLink } from "react-router-hash-link";
import "../../styles/header.css";
import { Box, Button, Drawer, Fab, List } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
function Header() {
  const [openNav, setOpenNav] = useState();
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
      <div className="menu-container-sm">
        <Fab
          style={{
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
          className="menu-fab"
          aria-label="add"
          onClick={() => setOpenNav(true)}
        >
          <KeyboardBackspaceIcon className="menu-icon" />
        </Fab>
        <Drawer anchor="right" open={openNav} onClose={() => setOpenNav(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenNav(false)}
            onKeyDown={() => setOpenNav(false)}
          >
            <div className="menu-title-container">
              <Rlink
                className="menu-title"
                style={{ textDecoration: "none" }}
                to="/"
              >
                Makineni Projects
              </Rlink>
            </div>
            <div className="menu-sm">
              <Rlink className="menu-item" to="aboutus">
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
          </Box>
        </Drawer>
      </div>
    </div>
  );
}

export default Header;
