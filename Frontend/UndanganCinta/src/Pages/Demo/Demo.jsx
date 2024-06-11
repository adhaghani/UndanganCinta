import React from "react";

import "./Demo.css";

import Navigation from "../../Component/Navigation/Navigation";
import Title from "../../Component/Title/Title";
import DemoCard from "./DemoCard/DemoCard";

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
          <DemoCard />
          <DemoCard />
          <DemoCard />
          <DemoCard />
          <DemoCard />
        </div>
      </div>
    </div>
  );
};

export default Demo;
