import React from 'react';

//components
import Navbar from '../Components/Navbar';
import HeroCarousal from "../Components/HeroCarousal/HeroCarousal.component";
import Footer1 from "../Components/footer1";

const Homelayout = (props) => {
    return (
        <>
            <div className="bg-gray-100">
                <Navbar />
                <HeroCarousal />
                {props.children}
                <Footer1 />
            </div>
        </>
    );
};

export default Homelayout;
