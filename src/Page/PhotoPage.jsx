import React from 'react';
import HeroImage from "../Components/Resources/HeroImage.png";

import Photos from '../Photo/photo';
const PhotosPage = () => {
    return (
        <div className="mx-4 ">
            <div>
                <img
                    src={HeroImage}
                    alt="logo"
                    className="w-full mt-5 h-80 rounded-md md:hidden"
                />
            </div>
            <Photos />
        </div>
    );
};

export default PhotosPage;
