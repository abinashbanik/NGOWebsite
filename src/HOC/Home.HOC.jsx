import React from 'react';
import { Route } from "react-router-dom";

//Layouts
import Homelayout from '../Layout/Home.layout';


const HomeHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <Homelayout>
                        <Component {...props} />
                    </Homelayout>
                )}
            />
        </>
    );
};

export default HomeHOC;
