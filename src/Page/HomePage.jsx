import React from 'react';

//components
import Content from "../Components/ContentReadMore/Readmore";
import Feed from '../Components/Facebook/facebook';
const HomePage = () => {
    return (
        <div className="flex px-10 gap-10 mx-20">
            <Content />
            <Feed />
        </div>
    );
};

export default HomePage;
