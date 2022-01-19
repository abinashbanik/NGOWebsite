import React, { Component } from 'react'

//components
import Navbar from '../Components/Navbar';
import HeroCarousal from "../Components/HeroCarousal/HeroCarousal.component";
// import Mapview from '../Components/MapContainer/mapindex';

import Footer1 from "../Components/footer1";

const Homelayout = (props) => {
    return (
        <>
            <div className="bg-gray-100 min-h-screen">
                <Navbar />
                <div className="hidden md:block">
                    <HeroCarousal className="shadow-lg" />
                </div>
                {props.children}
                {/* <div className='="w-48 h-48"'><Mapview /></div> */}


                <Footer1 />
            </div>
        </>
    );
};

export default Homelayout;
