import React, { Component } from 'react'
import { Link } from 'react-scroll'
import { SiGooglemaps } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
const Footer1 = () => {
    return (
        <>
            <div id="contact" className="bottom-0  bg-gradient-to-b from-red-700 via-red-500 to-red-500 w-full h-auto ">
                <div className="md:flex md:gap-2 item-center md:px-10 ml-8  pt-10 mb-4">
                    <div className="w-full h-full  md:flex md:flex-col text-white md:px-2 sm:mb-8">
                        <h1 className="text-3xl md:text-2xl">Address</h1>
                        <h3 className=" ">"Malancha"</h3>
                        <h3>(Sahitya, Sanskriti & Samajik Kendra)</h3>
                        <h3>C/O Smt. Chhaya Banik</h3>
                        <h3>20, Old Kalibari Road, Agartala, Pin:-799001</h3>
                        <div className="flex gap-2">
                            <SiGooglemaps className="h-6" /><a href="https://goo.gl/maps/uDcDuSfcX7ZXZisn6">Google Maps</a>
                        </div>
                    </div>
                    <div className="w-full h-full md:flex flex-col justify-center gap-1 text-white mt-2 md:px-5">
                        <h1 className="text-3xl md:text-2xl">Connect with Us</h1>
                        <a href="https://www.facebook.com/Malancha-Sahitya-Sanskriti-Samajik-Kendra-106866828470434/" className="hover:text-yellow-400"><h3>Find us on Facebook</h3></a>
                        <a href="https://youtube.com/channel/UCQBRolufYn7SzHcaiC9KstA" className="hover:text-yellow-400"><h3>Find us on Youtube</h3></a>


                    </div>
                    <div className="w-full h-full flex flex-col justify-center md:gap-2 text-white mt-2 md:px-5">
                        <h1 className="text-3xl md:text-2xl">Quick Contact</h1>
                        <a href="malanchassskendra@gmail.com" className="hover:text-yellow-400"><h4>malanchassskendra@gmail.com</h4></a>
                        <a href="malanchassskendra@gmail.com" className="hover:text-yellow-400"><h4>malanchassskendra@gmail.com</h4></a>
                        <a href="tel:++91-8415950490" className="hover:text-yellow-400">Tel: +91-8415950490</a>
                        <a href="tel:++91-8415950490" className="hover:text-yellow-400">Ph: +91-8415950490</a>
                    </div>
                    <div className="w-full h-full flex flex-col gap-2 text-white mt-2 md:px-5">
                        <h1 className="text-3xl md:text-2xl">Audit Report</h1>
                        <h3 className="justify-text flex flex-col ">
                            <a href="doc1.com" className="hover:text-yellow-400">1st Report</a>
                            <a href="doc2" className="hover:text-yellow-400">2nd Report</a>
                        </h3>
                    </div>

                </div>
                <div className="flex justify-center pr-8 w-full">
                    <button><Link className="shadow-lg bg-blue-300 border border-gray-400 p-2 rounded-lg w-28 hover:animate-pulse" activeClass=" active" to="navbar" spy={true} smooth={false}>Back To Top</Link>
                    </button>
                </div>
                <div className="bottom-0 text-xs  w-full md:items-left mt-2 flex py-2 md:py-0 pl-8 lg:pl-80 items-center bg-red-600 text-xs lg:font-semibold lg:mt-2 lg:h-8 lg:text-md">
                    <h6>Malancha(Sahitya, Sanskriti & Samajik Kendra)</h6>
                    <h6>© All Rights Reserved.</h6>
                    <h6 className="lg:ml-1">| Website Developed By: Redisk Technology</h6>
                </div>

            </div>
        </>
    );
};


export default Footer1;
