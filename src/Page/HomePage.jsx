import React from 'react';

//components
import Content from "../Components/ContentReadMore/Readmore";
import Feed from '../Components/Facebook/facebook';
const HomePage = () => {
    return (
        <div className="md:flex md:mx-14 lg:mx-40 bg-gray-200 flex-grow">
            <Content />
            <div className="mb-8 flex justify-center md:mt-10">
                {/* //flex justify-center my-10 md:my-4  */}
                <Feed />
            </div>

        </div>
    );
};

export default HomePage;
