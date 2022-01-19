import React, { useState } from "react";
import "./App.css";
import HeroCarousal from "../HeroCarousal/HeroCarousal.component";
import AimBox from "./AimBox";

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 550) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? "...Read more" : " Show less"}
            </span>
        </p>
    );
};

const Content = () => {
    return (
        <div>
            <div className="mx-auto  my-5 py-2 flex px-10 gap-3 w-full ">
                <div className="w-full">
                    <h1 className="font-extrabold py-2 text-3xl ">Welcome to Malancha</h1>
                    <h6 className="justify-text text-gray-800  mb-3">
                        Malancha (A Social Welfare Society) established in Agartala, Tripura, with a mission to help people &
                        sincerely working with the society for betterment of the society. We are working for those people who really need help.
                        Our volunteers always ready to work against any kind of social problem. Helping people is our main motto.
                    </h6>
                    <h2 className="flex text-gray-800 text-justify">
                        <ReadMore>
                            The Society duly registered under the Society Registration Act, the registration number 8638/2021, was
                            founded in 2021 by the few friends and the citizen of this country as Non-profitable community based
                            organization in Agartala, Tripura with in North east region of India. It was started by a team of
                            dedicated persons with the aim of helping the children who are orphans, semi orphans and those who
                            are from marginalized society. The organization was established as the will of citizens to participate
                            actively in Protection and conservation of environment, as well as to take an active role in the civil society.
                            Malancha is form to dedicate the Society & its improvements which will strengthen sustainable future and lead
                            towards social and economic improvements of the social communities at national level. In order to achieve this,
                            Malancha is committed to work with different range, in order to foster cooperation and joint work for the purpose
                            of achieving sustainable future and strong worldwide.
                        </ReadMore>
                    </h2>
                </div>

            </div>
            <div className="md:hidden">
                <HeroCarousal />
            </div>
            <AimBox className="" />
        </div>

    );
};

export default Content;

