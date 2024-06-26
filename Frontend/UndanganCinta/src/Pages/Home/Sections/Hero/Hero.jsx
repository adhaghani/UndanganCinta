import React from "react";

import heroimage from "/Home/hero.svg";
import demoHero from "/Demo/DemoHero.svg";

import "./Hero.css";

const Hero = (props) => {
  return (
    <div className="Hero" id="Hero">
      <div className="Container Hero">
        <div className="Section Text">
          {props.type === "Demo" ? (
            <h1>
              View our demonstration,
              <br />
              <span>Immerse</span> yourself.
            </h1>
          ) : (
            <h1>
              Your invitation card,
              <br />
              But <span>Better</span> in every way.
            </h1>
          )}
        </div>
        <div className="Section Image">
          {props.type === "Demo" ? (
            <img src={demoHero} alt="" />
          ) : (
            <img src={heroimage} alt="" />
          )}
        </div>
      </div>
      <div className="wrapper">
        <div className="custom-shape-divider-top-1717847592">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
