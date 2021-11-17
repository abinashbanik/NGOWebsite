import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import Pdf from "../PDF/pdf";
const DonateUsPage = () => {


    return (
        <div className="mx-20 h-72 my-10 text-gray-600 flex gap-8">
            <div>
                <h1 className="text-xl font-medium text-gray-800">
                    A/C Holder Name: Malancha
                </h1>
                <div className="flex flex-col mt-4">
                    <h1>A/C No: 20120110053355</h1>
                    <h1>IFSC Code: SBI0002012</h1>
                    <h1>Name of The Bank: SBI . Branch: Agartala </h1>
                </div>
            </div>



        </div>
    );
};

export default DonateUsPage;
