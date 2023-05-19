import React, { useState } from "react";
import "./Navbar.css";
// import background from '../../images/bg.jpg'
import {
  FaBars,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaApple,
  FaFacebookSquare,
  FaSpotify,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <div>
      <nav className="navbar">
        <a href="/" className="logo">
          Samir Hassan
        </a>
        <div className={navActive ? "nav-links nav-active" : "nav-links"}>
          <ul className="social-links">
            <li>
              <a href="/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="/">
                <FaYoutube />
              </a>
            </li>
            {/* <li>
              <a href="/">
                <FaTwitter />
              </a>
            </li> */}
            <li>
              <a href="/">
                <FaApple />{" "}
              </a>
            </li>
            <li>
              <a href="/">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://open.spotify.com/artist/32vR2XUC8TBvRBfG8dTZIV"
                rel="noreferrer"
              >
                <FaSpotify />
              </a>
            </li>
          </ul>
          <ul className="sidebar-menu-links">
            <li>
              <Link to={"/"} className="menu-links-a menu-links-a1">
                HOME
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="menu-links-a">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to={"/work"} className="menu-links-a">
                WORK
              </Link>
            </li>
            <li>
              <Link to={"/booking"} className="menu-links-a">
                BOOKING
              </Link>
            </li>
          </ul>
          <ul
            className="sidebar-social-links sidebar-social-flex"
            style={{ display: "none" }}
          >
            <li>
              <a href="/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="/">
                <FaYoutube />
              </a>
            </li>
            {/* <li>
              <a href="/">
                <FaTwitter />
              </a>
            </li> */}
            <li>
              <a href="/">
                <FaApple />
              </a>
            </li>
            <li>
              <a href="/">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://open.spotify.com/artist/32vR2XUC8TBvRBfG8dTZIV"
                rel="noreferrer"
              >
                <FaSpotify />
              </a>
            </li>
          </ul>
        </div>
        <div className="burger" onClick={toggleNav}>
          <h1>
            <FaBars />
          </h1>
        </div>
      </nav>
      <div className="menu-links">
        <ul>
          <li>
            <Link to={"/"} className="menu-links-a menu-links-a1">
              HOME
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="menu-links-a">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to={"/work"} className="menu-links-a">
              WORK
            </Link>
          </li>
          <li>
            <Link to={"/booking"} className="menu-links-a">
              BOOKING
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
