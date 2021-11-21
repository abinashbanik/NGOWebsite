import React from 'react';
import { Route } from "react-router-dom";

//Layouts
import PhotosLayout from '../Layout/PhotosLayout';

const PhotosHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <PhotosLayout>
                        <Component {...props} />
                    </PhotosLayout>
                )}
            />
        </>
    );
};

export default PhotosHOC;
