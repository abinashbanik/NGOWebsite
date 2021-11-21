import React from 'react';

import HeroImage from "../Components/Resources/HeroImage.png";
const AboutPage = () => {
    return (
        <div className="mx-4 ">
            <div>
                <img
                    src={HeroImage}
                    alt="logo"
                    className="w-full mt-5 h-80 rounded-md"
                />
            </div>
            <div className="mx-4 md:mx-20 ">
                <p className="my-8 text-justify">
                    <h6>Malancha (A Social Welfare Society) established in Agartala, Tripura, with a mission to help people &
                        sincerely working with the society for betterment of the society. We are working for those people who really need help.
                        Our volunteers always ready to work against any kind of social problem. Helping people is our main motto.The Society duly registered under the Society Registration Act, the registration number 8638/2021, was
                        founded in 2021 by the few friends and the citizen of this country as Non-profitable community based
                        organization in Agartala, Tripura with in North east region of India. It was started by a team of
                        dedicated persons with the aim of helping the children who are orphans, semi orphans and those who
                        are from marginalized society.</h6>

                    The organization was established as the will of citizens to participate
                    actively in Protection and conservation of environment, as well as to take an active role in the civil society.
                    Malancha is form to dedicate the Society & its improvements which will strengthen sustainable future and lead
                    towards social and economic improvements of the social communities at national level. In order to achieve this,
                    Malancha is committed to work with different range, in order to foster cooperation and joint work for the purpose
                    of achieving sustainable future and strong worldwide.
                </p>
                <div className="my-5 ">
                    <div className="gap-1 flex flex-col">
                        <h1 className="text-2xl text-gray-800 font-semibold">
                            Aim
                        </h1>
                        <hr className="bg-gray-200" />
                        <h3>
                            Our aim is to provide full protection to the neglected child of the society and to prospect their life to be a good citizen in the society.
                        </h3>
                    </div>
                    <div className="gap-1 flex flex-col my-4">
                        <h1 className="text-2xl text-gray-800 font-semibold">
                            Vision
                        </h1>
                        <hr />
                        <h3>
                            The vision of the society is that no neglected child should be without
                            the basic necessities in life, regardless of their life circumstances.


                        </h3>
                    </div>
                    <div className="gap-1 flex flex-col my-4">
                        <h1 className="text-2xl text-gray-800 font-semibold">
                            Mission
                        </h1>
                        <hr />
                        <h3>
                            Mainstreaming the Orphan, Semi Orphan and Street children in the national building by providing care, support &
                            protection through shelter, food, cloth and education is our mission, because the society thinks that the children
                            are the future of the country.
                        </h3>
                    </div>
                    <div className="gap-1 flex flex-col my-4">
                        <h1 className="text-2xl text-gray-800 font-semibold">
                            Future Work
                        </h1>
                        <hr />
                        <h3>
                            The establishment of a home for the homeless, distressed orphans for both boys and girls.

                            To provide orphan / semi orphan / street children, a childhood that they never experienced and help them to become useful members of the society.


                        </h3>
                    </div>
                    <div className="gap-1 flex flex-col my-4">
                        <h1 className="text-2xl text-gray-800 font-semibold">
                            Executive Members
                        </h1>
                        <hr className="" />
                        <div className="flex flex-col text-gray-800 leading-tight ">
                            <h1>1. Smt Anamika Chatterjee: President</h1>
                            <h1>2. Smt Ratna Dey (Banik): Vice-President</h1>
                            <h1>3. Sri Jhuma Banik: Secretary</h1>
                            <h1>4. Smt. Asish Chakraborty: Asstt. Secretary</h1>
                            <h1>5. Smt.Paramita Majumder(Biswas): Treasurer</h1>
                            <h1>6. Sri Prasanta Karmakar: Member</h1>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
