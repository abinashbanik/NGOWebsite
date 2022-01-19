import React from "react";
import HeroSlider from "react-slick";

// Compoenent
import { NextArrow, PrevArrow } from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
  const settingsLG = {
    autoplay: true,
    arrows: true,
    centerMode: true,
    centerPadding: "10px",
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    "https://lh3.ggpht.com/p/AF1QipMsaZXZy-UBVtI86UyjLJxr2KUXvCMGpU2RpWCK=s1536",
    "https://lh3.ggpht.com/p/AF1QipPjedPRQ2QWi7DJSZnLA_BZ0b-0iQlB0VT8-R-d=s1536",
    "https://lh3.ggpht.com/p/AF1QipM5VsgHVUtxZY9cTjyJOGFcLyZu2ep9Qk09avjd=s1536",
    "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg",
    "https://imgd.aeplcdn.com/1056x594/n/cw/ec/44407/kiger-exterior-right-front-three-quarter-12.jpeg?q=85&wm=1",
    "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
  ];

  return (
    <>
      <div className="">
        <HeroSlider {...settingsLG}>
          {images.map((image) => (
            <div className="w-full h-96 px-2 ">
              <img
                src={image}
                alt="testing"
                className="w-full h-full rounded-md"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousal;