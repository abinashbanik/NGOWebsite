import React from 'react';

import Navbar from '../Components/Navbar';
import Photos from "../Photo/photo";
import Footer1 from '../Components/footer1';


const PhotosLayout = (props) => {
    return (
        <>
            <div className="bg-gray-100">
                <Navbar />

                {props.children}
                <Footer1 />
            </div>
        </>
    );
};

export default PhotosLayout;