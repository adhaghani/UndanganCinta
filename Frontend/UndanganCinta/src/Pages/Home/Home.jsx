import React from "react";

import "./Home.css";
import Navigation from "../../Component/Navigation/Navigation";
import Footer from "../../Component/Footer/Footer";

import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
import Package from "./Sections/Package/Package";
import Contact from "./Sections/Contact/Contact";
const Home = () => {
  return (
    <>
      <Navigation />
      <div className="Home" id="Home">
        <Hero />
        <About />
        <Package />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
