import React, { Fragment } from "react";
import "./index.css"

import { BrowserRouter as Router } from "react-router-dom";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//HOC
import HomeHOC from "./HOC/Home.HOC";
import AboutHOC from "./HOC/About.HOC";
//Pages
import HomePage from "./Page/HomePage";
import AboutPage from "./Page/AboutPage";
import DonateUsPage from "./Page/DonateUsPage";


function App() {
  return (
    <>
      <HomeHOC path="/" exact component={HomePage} />
      <AboutHOC path="/about" exact component={AboutPage} />
      <AboutHOC path="/donateUs" exact component={DonateUsPage} />
    </>

  );
}

export default App;
