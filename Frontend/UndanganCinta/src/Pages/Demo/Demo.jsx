import React from "react";

import "./Demo.css";

import Navigation from "../../Component/Navigation/Navigation";
import Title from "../../Component/Title/Title";
import DemoCard from "./DemoCard/DemoCard";
import Footer from "../../Component/Footer/Footer";

const Demo = () => {
  return (
    <div className="Demo" id="Demo">
      <Navigation />

      <div className="Container Demo">
        <Title
          title="Demo"
          subtitle="Choose from one of our live Server Examples"
        />
        <div className="Card-Container">
          <DemoCard />
        </div>
      </div>
    </div>
  );
};

export default Demo;
