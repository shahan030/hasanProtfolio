import React from "react";
import { Link } from "react-router-dom";

const Header = () => {


  const fontStyle = { fontFamily: "'Exo 2', sans-serif" };

  return (
    <nav
      className="navbar navbar-expand-lg "
      style={{ ...fontStyle, backgroundColor: "#000" }}
    >
      <div className="container">

        {/* Brand */}
        <Link className="navbar-brand text-white"  to="/" style={fontStyle}>
          Video Alchemist
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link text-white active" to="/" style={fontStyle}>
                HOME
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/about" style={fontStyle}>
                ABOUT
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/view" style={fontStyle}>
                PORTFOLIO
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact" style={fontStyle}>
                CONTACT
              </Link>
            </li>

          </ul>

          {/* icon */}
         <div>
            <a href=" https://www.linkedin.com/in/hasan-basheer?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-white"></i>
            </a>
            <a href="https://www.instagram.com/hasn.bsh/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-white"></i>
            </a>
         </div>

        </div>
      </div>
    </nav>
  );
};

export default Header;