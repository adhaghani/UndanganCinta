import React from "react";

import "./Demo.css";

import Navigation from "../../Component/Navigation/Navigation";
import Title from "../../Component/Title/Title";
const Demo = () => {
  return (
    <div className="Demo" id="Demo">
      <Navigation />

      <div className="Container Demo">
        <Title title="Demo" subtitle="How does it work?" />
      </div>
    </div>
  );
};

export default Demo;
