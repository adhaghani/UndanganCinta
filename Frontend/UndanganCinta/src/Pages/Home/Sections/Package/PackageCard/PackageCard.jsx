import React from "react";

import Check from "/PackageSection/Check.svg";
const PackageCard = () => {
  return (
    <div className="PackageCard" id="PackageCard">
      <div className="title">
        <h3>Enterprise</h3>
      </div>
      <ul className="package-details">
        <li>
          {" "}
          <img src={Check} alt="" />
          perks List
        </li>
        <li>
          {" "}
          <img src={Check} alt="" />
          perks List
        </li>
        <li>
          {" "}
          <img src={Check} alt="" />
          perks List
        </li>
        <li>
          {" "}
          <img src={Check} alt="" />
          perks List
        </li>
        <li>
          {" "}
          <img src={Check} alt="" />
          perks List
        </li>
      </ul>
    </div>
  );
};

export default PackageCard;
