import React, { Component } from 'react'

import "./index.css"

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//HOC
import HomeHOC from "./HOC/Home.HOC";
import AboutHOC from "./HOC/About.HOC";
import PhotosHOC from './HOC/PhotosHOC';
//Pages
import HomePage from "./Page/HomePage";
import AboutPage from "./Page/AboutPage";
import DonateUsPage from "./Page/DonateUsPage";
import PhotoPage from './Page/PhotoPage';


function App() {
  return (
    <>
      <HomeHOC path="/" exact component={HomePage} />
      <AboutHOC path="/about" exact component={AboutPage} />
      <PhotosHOC path="/gallery" exact component={PhotoPage} />
      <HomeHOC path="/donateUs" exact component={DonateUsPage} />
    </>

  );
}

export default App;
