import React from 'react';

import Navbar from '../Components/Navbar';
import Footer1 from '../Components/footer1';


const AboutLayout = (props) => {
    return (
        <>
            <div className="bg-gray-50">
                <Navbar />


                {props.children}
                <Footer1 />
            </div>
        </>
    );
};

export default AboutLayout;