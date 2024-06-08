import React from "react";

import Title from "../../../../Component/Title/Title";
import PackageCard from "./PackageCard/PackageCard";
import "./Package.css";
const Package = () => {
  const packageDetails = [
    {
      title: "Basic",
      price: "$0",
      perks: [
        "Free Invitations",
        "card customization",
        "RSVP form",
        "Edit design"
      ],
      noPerks: [
        "24/7 Support",
        "Custom Design",
        "Detailed Analytics",
        "Automatic invitations",
        "Automatic reminders",
        "Automatic updates"
      ]
    },
    {
      title: "Premium",
      price: "$10",
      perks: [
        "Free Invitations",
        "card customization",
        "RSVP form",
        "Edit design",
        "Automatic invitations",
        "Automatic reminders",
        "Automatic updates",
        "Custom Design"
      ],
      noPerks: ["24/7 Support", "Detailed Analytics"]
    },
    {
      title: "Enterprise",
      price: "$50",
      perks: [
        "Free Invitations",
        "card customization",
        "RSVP form",
        "Edit design",
        "Automatic invitations",
        "Automatic reminders",
        "Automatic updates",
        "Custom Design",
        "24/7 Support",
        "Detailed Analytics"
      ],
    }
  ];

  return (
    <div className="Package" id="Package">
      <div className="Container Package">
        <Title
          title="Our Package"
          subtitle="Choose a wide range of package according to your needs."
        />
        <div className="Card-Container">
          {packageDetails.map((item, index) => (
            <PackageCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Package;
