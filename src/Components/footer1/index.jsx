import React from 'react';

const Footer1 = () => {
    return (
        <>
            <div className="bottom-0  bg-gradient-to-b from-red-700 via-red-500 to-red-500 w-full h-full">
                <div className="flex gap-2 justify-center px-28 py-10">
                    <div className="w-full h-full flex flex-col gap-2 text-white px-10">
                        <h1 className="text-2xl">Address</h1>
                        <h3 className="justify-text">
                            "Malancha"(Sahitya, Sanskriti & Samajik Kendra)
                            C/O Smt. Chhaya Banik, 20, Old Kalibari Road, Agartala, Pin:-799001
                        </h3>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center gap-1 text-white px-10">
                        <h1 className="text-2xl">Connect with Us</h1>
                        <a href="https://www.facebook.com/Malancha-Sahitya-Sanskriti-Samajik-Kendra-106866828470434/" className="hover:text-yellow-400"><h3>Find us on Facebook</h3></a>
                        <a href="https://youtube.com/channel/UCQBRolufYn7SzHcaiC9KstA" className="hover:text-yellow-400"><h3>Find us on Youtube</h3></a>


                    </div>
                    <div className="w-full h-full flex flex-col justify-center gap-2 text-white px-10">
                        <h1 className="text-2xl">Quick Contact</h1>
                        <a href="malanchassskendra@gmail.com" className="hover:text-yellow-400"><h4>malanchassskendra@gmail.com</h4></a>
                        <a href="malanchassskendra@gmail.com" className="hover:text-yellow-400"><h4>malanchassskendra@gmail.com</h4></a>
                        <a href="tel:++91-8415950490" className="hover:text-yellow-400">Tel: +91-8415950490</a>
                        <a href="tel:++91-8415950490" className="hover:text-yellow-400">Ph: +91-8415950490</a>
                    </div>
                    <div className="w-full h-full flex flex-col gap-2 text-white px-10">
                        <h1 className="text-2xl">Audit Report</h1>
                        <h3 className="justify-text flex flex-col ">
                            <a href="doc1.com" className="hover:text-yellow-400">1st Report</a>
                            <a href="doc2" className="hover:text-yellow-400">2nd Report</a>
                        </h3>
                    </div>
                </div>
                <div className="w-full flex justify-center bg-red-600 ">
                    <h2>Malancha(Sahitya, Sanskriti & Samajik Kendra)© All Rights Reserved. | Website Developed By: Redisk Technology</h2>
                </div>
            </div>
        </>
    );
};


export default Footer1;
