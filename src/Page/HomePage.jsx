import React from 'react';
//components
import Content from "../Components/ContentReadMore/Readmore";
import HeroCarousal from "../Components/HeroCarousal/HeroCarousal.component";
import Feed from '../Components/Facebook/facebook';
const HomePage = () => {
    return (

        <div>
            <div className="md:flex md:mx-14 lg:mx-40 bg-gray-200 flex-grow">
                <Content />
                <div className="mb-8 shadow-lg rounded-lg mx-6 lg:mr-8  md:mt-10">
                    <Feed className="rounded-lg" />
                </div>                
            </div>
            
        </div>


    );
};

export default HomePage;
