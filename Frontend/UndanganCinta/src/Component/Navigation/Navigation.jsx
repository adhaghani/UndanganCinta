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
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Feature</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>

        <div className="Section">
          <Button value="Sign in" className="outline" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
