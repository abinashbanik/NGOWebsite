import React, { Component } from 'react'

//components
import Navbar from '../Components/Navbar';
import HeroCarousal from "../Components/HeroCarousal/HeroCarousal.component";
import Footer1 from "../Components/footer1";

const Homelayout = (props) => {
    return (
        <>
            <div className="bg-gray-100 min-h-screen">
                <Navbar />
                <div className="hidden md:block">
                    <HeroCarousal />
                </div>
                {props.children}                
                <Footer1 />
            </div>
        </>
    );
};

export default Homelayout;
