import React, { useState, useEffect } from "react";
import heart from "../assets/heart.png";
import Language from "../assets/Language.png";
import search from "../assets/search.png";
import profile from "../assets/profile.png";
import bag from "../assets/bag.png";
import logo from "../assets/logo.png";
import hamburger from "../assets/hamburger.png";
import "../styles/Header.css";
import Marquee from "./Marquee";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Marquee />
      <header className="header-container">
        <div className="top-header">
          <img src={logo} alt="logo" className="logo-img" />

          <nav className={`menu-links ${menuOpen ? "mobile-menu-open" : ""}`}>
            <ul className="menu-list">
              <li className="menu-item">SHOP</li>
              <li className="menu-item">SKILLS</li>
              <li className="menu-item">STORIES</li>
              <li className="menu-item">ABOUT</li>
              <li className="menu-item">CONTACT US</li>
            </ul>
          </nav>

          <div className="right-container">
            <img src={search} alt="search" className="right-icon" />
            <img src={heart} alt="heart" className="right-icon" />
            <img src={bag} alt="bag" className="right-icon" />
            <img
              src={profile}
              alt="profile"
              className="right-icon desktop-only"
            />
            <img
              src={Language}
              alt="language"
              className="right-icon desktop-only"
            />
            <img
              src={hamburger}
              alt="menu"
              className="hamburger-icon mobile-only"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
