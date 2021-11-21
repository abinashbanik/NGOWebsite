import React, { Component } from 'react'

import "./index.css"

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Components
import Footer1 from "./Components/footer1";
//HOC
import HomeHOC from "./HOC/Home.HOC";
import AboutHOC from "./HOC/About.HOC";
//Pages
import HomePage from "./Page/HomePage";
import AboutPage from "./Page/AboutPage";
import DonateUsPage from "./Page/DonateUsPage";
import Photos from "./Photo/photosPage";


function App() {
  return (
    <>
      <HomeHOC path="/" exact component={HomePage} />
      <AboutHOC path="/about" exact component={AboutPage} />
      <HomeHOC path="/gallery" exact component={Photos} />
      <HomeHOC path="/donateUs" exact component={DonateUsPage} />      
    </>

  );
}

export default App;
