import React, { useState } from "react";

import "./Navigation.css";

import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [SideNav, setSideNav] = useState(false);

  const handleSideNav = () => {
    setSideNav(!SideNav);
  };

  return (
    <div className="Navigation" id="Navigation">
      <div className="Container Navigation">
        <div className="Section">
          <div className="Logo">
            <h3>UndanganCinta</h3>
          </div>
          <ul className="List">
            <li>
              <Link to="/UndanganCinta/">Home</Link>
            </li>
            <li>
              <a href="/UndanganCinta/#About">About </a>
            </li>
            <li>
              <a href="/UndanganCinta/#Package">Package </a>
            </li>
            <li>
              <Link to="/UndanganCinta/Demo">Demo </Link>
            </li>
          </ul>
        </div>

        <div className="Section Button">
          <Button value="Sign in" className="Fill" />
        </div>
        <div className="Section Hamburger">
          <button
            id="Hamburger"
            className={SideNav ? "Hamburger Active" : "Hamburger"}
            onClick={handleSideNav}
          >
            <div className="Top"></div>
            <div className="Mid"></div>
            <div className="Bot"></div>
          </button>
        </div>
      </div>
      <div className={SideNav ? "SideNav Active" : "SideNav"} id="SideNav">
        <div className="Section">
          <ul className="List">
            <li>
              <Link to="/UndanganCinta/" onClick={handleSideNav}>
                Home
              </Link>
            </li>
            <li>
              <a href="/UndanganCinta/#About" onClick={handleSideNav}>
                About
              </a>
            </li>
            <li>
              <a href="/UndanganCinta/#Package" onClick={handleSideNav}>
                Package
              </a>
            </li>
            <li>
              <Link to="/UndanganCinta/Demo" onClick={handleSideNav}>
                Demo{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="Section Button">
          <Button value="Sign in" className="Fill Full" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
