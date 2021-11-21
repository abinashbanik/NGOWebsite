import React from 'react';

//components
import Content from "../Components/ContentReadMore/Readmore";
import HeroCarousal from "../Components/HeroCarousal/HeroCarousal.component";
import Feed from '../Components/Facebook/facebook';
const HomePage = () => {
    return (

        <div className="md:flex md:mx-14 lg:mx-40 bg-gray-200 flex-grow">

            <Content />
            <div className="mb-8 ml-26 md:mt-10">
                <Feed />
            </div>

        </div>

    );
};

export default HomePage;
