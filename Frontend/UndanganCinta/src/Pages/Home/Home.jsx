import React from "react";

import "./Home.css";
import Navigation from "../../Component/Navigation/Navigation";
import Footer from "../../Component/Footer/Footer";

import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
import Package from "./Sections/Package/Package";
const Home = () => {
  return (
    <>
      <div className="Home" id="Home">
        <Navigation />
        <Hero />
        <About />
        <Package />
        <Footer />
      </div>
    </>
  );
};

export default Home;
