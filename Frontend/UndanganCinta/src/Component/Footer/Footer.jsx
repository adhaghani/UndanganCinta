import React from "react";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer" id="Footer">
      <div className="wrapper">
        <div className="custom-shape-divider-top-1717848734">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="Container Footer">
        <div className="Section Social">
          <h3 className="Title">About Us</h3>
          <ul className="list">
            <li>
              <a href="#">History</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>
        <div className="Section Social">
          <h3 className="Title">How to</h3>
          <ul className="list">
            <li>
              <a href="#">Create account</a>
            </li>
            <li>
              <a href="#">Buy subscription</a>
            </li>
            <li>
              <a href="#">Create invitation</a>
            </li>
          </ul>
        </div>
        <div className="Section Social">
          <h3 className="Title">Follow Us</h3>
          <ul className="list">
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="Container Copyright">
        <div className="Section">
          <p>Copyright &copy; 2022. UndanganCinta. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
