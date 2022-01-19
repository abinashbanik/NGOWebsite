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
    'https://lh3.ggpht.com/p/AF1QipO1LzzjxOugb0Oz3P-l_DHJB5ajfYh1b4V6Piqf=s1536',
    'https://lh3.ggpht.com/p/AF1QipO2myFcBoiDSgx5l5jcr1k5vcO5t-kO6MyDSUQM=s1024',
    'https://lh3.ggpht.com/p/AF1QipPFLfBkhHpQOchVh6BMHgarPO_Z3bxv1KdrqJ8k=s1536',
    'https://lh3.ggpht.com/p/AF1QipPjedPRQ2QWi7DJSZnLA_BZ0b-0iQlB0VT8-R-d=s1536',
    'https://lh3.ggpht.com/p/AF1QipNI8bTZquoXTJk0xnoDLMJX1aelHeXcasRd0VzU=s1536',
    'https://lh3.ggpht.com/p/AF1QipM5VsgHVUtxZY9cTjyJOGFcLyZu2ep9Qk09avjd=s1536',
    'https://lh3.ggpht.com/p/AF1QipNMwvrG0BOMkox0dddlSbua1VHfB9FKDanerpyr=s1536',
    'https://lh3.ggpht.com/p/AF1QipMZwfjJOp1OOZn9fM2-fxodMyPtdFQpre6B18fj=s1536',
    'https://lh3.ggpht.com/p/AF1QipMsaZXZy-UBVtI86UyjLJxr2KUXvCMGpU2RpWCK=s1536',

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