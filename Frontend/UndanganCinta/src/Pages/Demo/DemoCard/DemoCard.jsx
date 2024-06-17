import React from "react";

import "./DemoCard.css";

import Button from "../../../Component/Button/Button";
const DemoCard = () => {
  return (
    <div className="DemoCard" id="DemoCard">
      <div className="card-image"></div>
      <div className="card-details">
        <div className="title">
          <h3 className="partners">Abu & Siti</h3>
          <p className="dateTime">14/09/2022 | 09:00-10:00</p>
        </div>
        <Button
          className="Fill NoOutline Full"
          value="View Live Demo"
          link="/Demo/LiveDemo"
        />
      </div>
    </div>
  );
};

export default DemoCard;
