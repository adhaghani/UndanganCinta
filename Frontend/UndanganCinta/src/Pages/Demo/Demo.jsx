import React from "react";

import "./Demo.css";

import Navigation from "../../Component/Navigation/Navigation";
import Footer from "../../Component/Footer/Footer";

import Title from "../../Component/Title/Title";
import DemoCard from "./DemoCard/DemoCard";
import Hero from "../Home/Sections/Hero/Hero";

const Demo = () => {
  return (
    <div className="Demo" id="Demo">
      <Navigation />

      <Hero type="Demo" />
      <div className="Container Demo">
        <Title title="List of Demo" subtitle="View all the demo available." />
        <div className="Card-Container">
          <DemoCard />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Demo;
