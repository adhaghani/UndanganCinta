import React from "react";

import "./Navigation.css";

import Button from "../Button/Button";
const Navigation = () => {
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
              <a href="#Contact">Demo</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="Section">
          <Button value="Sign in" className="Fill" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
