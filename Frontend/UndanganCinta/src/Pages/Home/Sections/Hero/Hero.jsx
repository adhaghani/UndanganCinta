import React from "react";

import heroimage from "/hero.svg";

import "./Hero.css";
const Hero = () => {
  return (
    <div className="Hero" id="Hero">
      <div className="Container Hero">
        <div className="Section Text">
          <h1>
            Your invitation card,
            <br />
            But <span>Better</span> in every way.
          </h1>
        </div>
        <div className="Section Image">
          <img src={heroimage} alt="" />
        </div>
      </div>
      <svg viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,96L60,122.7C120,149,240,203,360,197.3C480,192,600,128,720,128C840,128,960,192,1080,197.3C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Hero;
