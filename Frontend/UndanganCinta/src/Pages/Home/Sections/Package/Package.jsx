import React from "react";

import Title from "../../../../Component/Title/Title";
import PackageCard from "./PackageCard/PackageCard";
import "./Package.css";
const Package = () => {
  return (
    <div className="Package" id="Package">
      <div className="Container Package">
        <Title
          title="Our Package"
          subtitle="Choose a wide range of package according to your needs."
        />
        <div className="Card-Container">
          <PackageCard />
          <PackageCard />
          <PackageCard />
        </div>
      </div>
    </div>
  );
};

export default Package;
