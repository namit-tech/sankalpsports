import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import sankalplogo from "../../Assets/SANKALPFINALLOGO.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:sankalpsportsacademy@gmail.com";
  };

  return (
    <footer className="footer">
      <div className="footer-div">
        {/* Logo Section */}
        <div className="footer-section">
          <Link to="/">
            <img src={sankalplogo} alt="Sankalp Logo" className="footer-logo" />
          </Link>
        </div>

        {/* Links Section */}
        <div className="footer-section">
          <h2>Links</h2>
          <div className="footer-links-group">
            <Link to="/" className="footer-link">
              Home
            </Link>
            <Link to="/aboutus" className="footer-link">
              About Us
            </Link>
            <Link to="/contactus" className="footer-link">
              Contact Us
            </Link>
            <Link to="/coaches" className="footer-link">
              Coaches
            </Link>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section">
          <h2>Contact Info</h2>
          <div className="footer-links-group">
            <Link to="tel:+919899790810" className="footer-link">
               +91 98997 90810
            </Link>
            <span
              onClick={handleEmailClick}
              className="footer-link"
              style={{ cursor: "pointer" }}
            >
               sankalpsportsacademy@gmail.com
            </span>
            <span className="footer-link">
               102, Spring Lane, London
            </span>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h2>Social Media</h2>
          <div className="socialmedia-icon">
            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <FaSquareFacebook className="icon-footer" />
            </Link>
            <Link
              to="https://youtube.com/@sankalpsports4904?si=D6AKYNTrOvIQueYN"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <IoLogoYoutube className="icon-footer" />
            </Link>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>© 2025 Sankalp Sports Academy • All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;