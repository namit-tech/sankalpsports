import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import basketlogo from "../../Assets/basketball logo.png";
import sankalplogo from "../../Assets/SANKALPFINALLOGO.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="navbar">
        <Link to={"/"} onClick={closeMenu}>
          <img className="sankalplogo" src={sankalplogo} alt="Sankalp Logo" />
        </Link>

        <div className={`icons-nav`}>
          <FaSquareFacebook className="icon-nav facebook" />
          <Link
            to="https://youtube.com/@sankalpsports4904?si=D6AKYNTrOvIQueYN"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <IoLogoYoutube className="icon-nav youtube" />
          </Link>
        </div>

        <Link to={"/"} onClick={closeMenu}>
          <img className="basketlogo" src={basketlogo} alt="Basketball Logo" />
        </Link>

        <button className="hamburger" onClick={toggleMenu}>
          <span
            className={`hamburger-line ${isMenuOpen ? "rotate-45" : ""}`}
          ></span>
          <span
            className={`hamburger-line ${isMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`hamburger-line ${isMenuOpen ? "-rotate-45" : ""}`}
          ></span>
        </button>

        <div className={`main-link ${isMenuOpen ? "active" : ""}`}>
          <Link to={"/aboutus"} onClick={closeMenu}>
            About
          </Link>
          <Link to={"/contactus"} onClick={closeMenu}>
            Contact Us
          </Link>
          <Link to={"/coaches"} onClick={closeMenu}>
            Coaches
          </Link>
          <Link to={"/gallery"} onClick={closeMenu}>
            Gallery
          </Link>
        </div>

        <div
          className={`nav-overlay ${isMenuOpen ? "active" : ""}`}
          onClick={closeMenu}
        ></div>
      </div>
    </>
  );
};

export default Navbar;
