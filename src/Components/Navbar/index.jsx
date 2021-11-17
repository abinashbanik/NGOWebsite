import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  BiChevronRight,
  BiSearch,
  BiMenu,
  BiChevronDown,
} from "react-icons/bi";
import logo from "../Resources/logo.png";
import { IoIosMail } from "react-icons/io";
import { AiTwotonePhone } from "react-icons/ai";


const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center">
            Bengaluru <BiChevronRight />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
const NavMd = () => {
  return (
    <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
      <BiSearch />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline-none"
        placeholder="Search for movies, events, Plays, Sports and Activities."
      />
    </div>
  );
};
const NavLg = () => {
  return (
    <>
      <div className="container mx-auto mb-2 px-4 gap-10 flex items-center align-items justify-between ">

        <div className="w-1/2 h-10 rounded-lg flex">
          <img
            src={logo}
            alt="logo"
            className="w-20 mt-1 h-full rounded-lg"
          />
          <div className="w-full ml-8 pb-4 h-full">
            <h1 className="font-bold text-gray-900 text-xl">"Malancha"(Sahitya, Sanskriti & Samajik Kendra)</h1>
            <h3 className="text-sm">A Non-Government Orgaisation</h3>
          </div>
        </div>
        <div className=" h-10  text-md text-bold rounded-lg ">
          <div className="w-full  flex gap-3 ">
            <a className="hover:underline hover:text-white " href="/">Home</a>
            <a className="hover:underline hover:text-white " href="/about">About</a>
            <a className="hover:underline hover:text-white " href="/about/:id">Gallary</a>
            <a className="hover:underline hover:text-white " href="/donateUs">Donate Us</a>
            <a className="hover:underline hover:text-white " href="https://drive.google.com/file/d/1k6kl0i8mStnTsd0gPPnHb5x_feh1joOh/view?usp=sharing">Join Us</a>
            <a className="hover:underline hover:text-white " href="/about/:id">Contact Us</a>

          </div>
          <div className="">
            <div className="text-yellow-400 flex justify-between">
              <div className="flex justify-between gap-2">
                <AiTwotonePhone className="h-6" /><a href="tel:++91 8415950490">+91-8415950490</a>
              </div>
              <div className="flex justify-between gap-2">
                <IoIosMail className="h-6" />
                <a href="malanchassskendra@gmail.com"><h4>Mail Us</h4></a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-green-600  p-4">
        <div className="hidden">
          {/* Mobile screen */}
          <NavSm />
        </div>
        <div className="hidden">
          {/* Medium/Tab screen */}
          <NavMd />
        </div>
        <div className="w-full">
          {/* Large screen */}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
