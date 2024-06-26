import React from "react";

import "./LiveDemo.css";
import Title from "../../../Component/Title/Title";

import qr from "/Demo/qr.png";
import heroBg from "/Demo/heroBg.jpg";
const LiveDemo = () => {
  return (
    <div className="LiveDemo" id="LiveDemo">
      <div className="Container">
        <div className="Section Hero">
          <div className="Event-Image">
            <img src={heroBg} alt="" />
          </div>
        </div>
        <div className="Section Details">
          <Title
            title={"Event Details"}
            subtitle={"Everything you need to know"}
          />  
          <div className="Event-Details">
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
            <div className="Details">
              <div className="information-Card">
                <h3>Event Name:</h3>
                <p>Amran and Hasni Nikkah ceremony</p>
              </div>
              <div className="information-Card">
                <h3>Date:</h3>
                <p>21/02/2025</p>
              </div>
              <div className="information-Card">
                <h3>Time:</h3>
                <p>12:00P.M - 3:00P.M</p>
              </div>

              <div className="information-Card">
                <h3>Location:</h3>
                <p className="AddressLine1">
                  Universiti Teknologi MARA (UiTM) Cawangan Pahang,
                  <br />
                  Kampus Raub, Felda Krau
                  <br />
                  27600, Raub
                  <br />
                  Pahang, Malaysia
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Section Attendance">
          <div className="Event-Attendance">
            <Title title={"Are you coming?"} subtitle={"confirm here"} />
            <div className="RSVP">
              <div className="QR-Container">
                <img src={qr} alt="" />
              </div>
              <h1>Or</h1>
              <div className="Event-Informations">
                <a href="">Click Here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDemo;
