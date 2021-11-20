import React, { Component } from 'react'

const Footer1 = () => {
    return (
        <>
            <div id="contact" className=" bottom-0  bg-gradient-to-b from-red-700 via-red-500 to-red-500 w-full h-auto ">
                <div className="md:flex md:gap-2 item-center md:px-16 ml-8  pt-10 mb-4 h-auto">
                    <div className="w-full h-full md:flex flex-col text-white md:px-2 sm:mb-8">
                        <h1 className="text-3xl md:text-2xl">Address</h1>
                        <h3 className=" ">"Malancha"</h3>
                        <h3>(Sahitya, Sanskriti & Samajik Kendra)</h3>
                        <h3>C/O Smt. Chhaya Banik</h3>
                        <h3>20, Old Kalibari Road, Agartala, Pin:-799001</h3>
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
                <div className="bottom-0  w-full md:flex py-4 md:py-0 pl-8 md:pl-0 items-center bg-red-600 text-xs md:text-sm">
                    <h2>Malancha(Sahitya, Sanskriti & Samajik Kendra)</h2>
                    <h2>© All Rights Reserved.</h2>
                    <h2>| Website Developed By: Redisk Technology</h2>
                </div>
            </div>
        </>
    );
};


export default Footer1;
