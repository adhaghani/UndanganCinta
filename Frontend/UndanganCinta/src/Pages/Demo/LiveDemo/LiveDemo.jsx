import React from "react";

import "./LiveDemo.css";
import Title from "../../../Component/Title/Title";
const LiveDemo = () => {
  return (
    <div className="LiveDemo" id="LiveDemo">
      <div className="Hero" id="Hero">
        <div className="Event-Image">Event Image</div>
        <div className="Event-Message">
          <h2 className="Message">
            You are invited To Amran and Hasni Nikkah Ceremony
          </h2>
          <p className="subTitle">Please confirm your attendance below.</p>
        </div>
        <div className="Event-Details">
          <Title title={"Event Details"} />
          {/* Location Details */}
          <div className="Location">
            <iframe
              width="100%"
              height="500"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Universiti%20Teknologi%20Mara%20(UiTM),%20Cawangan%20Pahang%20Kampus,%20Felda%20Krau,%2027600%20Raub,%20Pahang+(UiTM%20Raub)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps systems</a>
            </iframe>
          </div>
        </div>
        <div className="Event-Attendance">
          <Title title={"Confirm your attendance here"} />
          <div className="RSVP">
            <div className="QR-Container">
              <p>Scan QR to Confirm Attendance</p>
            </div>
            <div className="Event-Informations"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDemo;
