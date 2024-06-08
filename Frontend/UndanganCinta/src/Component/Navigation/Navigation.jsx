import React, { useState } from "react";

import "./Navigation.css";

import Button from "../Button/Button";
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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Package">Package</a>
            </li>
            <li>
              <a href="#Demo">Demo</a>
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
              <a href="#" onClick={handleSideNav}>
                Home
              </a>
            </li>
            <li>
              <a href="#About" onClick={handleSideNav}>
                About
              </a>
            </li>
            <li>
              <a href="#Package" onClick={handleSideNav}>
                Package
              </a>
            </li>
            <li>
              <a href="#Demo" onClick={handleSideNav}>
                Demo
              </a>
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
