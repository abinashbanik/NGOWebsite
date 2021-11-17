import React from 'react';
import { Route } from "react-router-dom";

//Layouts
import AboutLayout from '../Layout/About.layout';

const AboutHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <AboutLayout>
                        <Component {...props} />
                    </AboutLayout>
                )}
            />
        </>
    );
};

export default AboutHOC;
