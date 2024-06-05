import React from "react";

import Title from "../../../../Component/Title/Title";
import AboutSection from "./AboutSection/AboutSection";
import "./About.css";

import Track from "/AboutSection/Track.svg";
import Safe from "/AboutSection/Safe.svg";
import Saving from "/AboutSection/Saving.svg";
import Matter from "/AboutSection/Matter.svg";
const About = () => {
  return (
    <div className="About" id="About">
      <div className="Container About">
        <Title title="About Us" subtitle="What we actually do?" />
        <div className="Section-Container">
          <AboutSection
            image={Track}
            title="Track your invitation."
            details="With us, you are able to keep track of your invitation. easing the process of budgeting for the events."
          />
          <AboutSection
            image={Safe}
            title="Keep your event safe."
            details="Keep your event safe by only inviting individuals you know, and avoiding any unkown person from ruining you precious moment."
          />
          <AboutSection
            image={Matter}
            title="Invite people that matter."
            details="Invite people that actually matter to you. Make your event more intimate by having only people that matter in your life. Not a person you only have met once."
          />
          <AboutSection
            image={Saving}
            title="Budget Properly."
            details="By knowing exactly how many person will attend your event, it will allow you to make a proper budget and avoid wasting money."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
