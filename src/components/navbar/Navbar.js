import React from "react";
import "./StyleNavbar.css";
import logo from "../../assets/2.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="nav">
          <a href="/index.html">
            <img src={logo} className="logo" />
          </a>
          <div className="nav-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/portofolio">Portofolio</Link>
              </li>
              {/* <li>
                <a href="page/about/about.html">About</a>
              </li>
              <li>
                <a href="page/portofolio/portofolio.html">Portofolio</a>
              </li>
              <li>
                <a href="page/skills/skills.html">Skills</a>
              </li> */}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
