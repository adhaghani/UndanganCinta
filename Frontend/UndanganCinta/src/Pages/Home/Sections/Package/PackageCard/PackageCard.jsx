import React from "react";

import Check from "/PackageSection/Check.svg";
import noCheck from "/PackageSection/noCheck.svg";
import Button from "../../../../../Component/Button/Button";
const PackageCard = (props) => {
  return (
    <div className="PackageCard" id="PackageCard">
      <div className="title">
        <h2>{props.data.title}</h2>
      </div>
      <div className="Price">
        <h1>
          {props.data.price} <span>/ Month</span>
        </h1>
      </div>
      <ul className="package-details">
        {props.data.perks.map((perk) => {
          return (
            <li key={perk}>
              {" "}
              <img src={Check} alt="" /> <p>{perk}</p>{" "}
            </li>
          );
        })}
        {props.data.noPerks && (
          <>
            {props.data.noPerks.map((noPerk) => {
              return (
                <li key={noPerk} className="gray">
                  {" "}
                  <img src={noCheck} alt="" /> <p>{noPerk}</p>{" "}
                </li>
              );
            })}
          </>
        )}
      </ul>
      <Button className="Fill Full" value="Buy" />
    </div>
  );
};

export default PackageCard;
