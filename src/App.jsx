import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";
import Features from "./components/Features";
import OurServices from "./components/OurServices";
const App = () => {

  return (
    <div>
    <Navbar/>
    <HeroSection />
    <HeroSection2 />
    <Features/>
    <OurServices/>
    </div>
  )
};

export default App;
