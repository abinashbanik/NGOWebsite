import React, { Component } from 'react'
import { Button, Link } from 'react-scroll'
import logo from "../Resources/logo.png";
import { IoIosMail } from "react-icons/io";
import { AiTwotonePhone } from "react-icons/ai";


const NavSm = () => {
  const [isOpen, setisOpen] = React.useState(false);
  function handleClick() {
    setisOpen(!isOpen);
  }
  return (
    <>


      <div className=" h-14 px-2 gap-10 flex items-center align-items justify-between ">

        <div className="w-full h-full rounded-lg flex">
          <a href="/">
            <img
              src={logo}
              alt="logo"
              className="w-20 h-18  rounded-full"
            />
          </a>

          <div className="w-full ml-4  h-full">
            <h1 className="font-bold text-gray-900 text-sm">"Malancha"</h1>
            <h1 className="font-bold text-gray-900 text-sm">(Sahitya, Sanskriti & Samajik Kendra)</h1>
            <h3 className="text-sm">An Non-Government Orgaisation</h3>
          </div>
        </div>
        <div>
          <button type="button" className="block lg:hidden" onClick={handleClick}>
            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {isOpen && (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              )}
              {!isOpen && (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>
        {/* <div className=" h-full w-full text-sm text-bold ">
          <div className="flex justify-between gap-1 mb-4 ">
            <a className="hover:underline hover:text-white " href="/">Home</a>
            <a className="hover:underline hover:text-white " href="/about">About</a>
            <a className="hover:underline hover:text-white " href="/gallery">Gallery</a>
            <button className="hover:underline hover:text-white "><a href="/donateUs">Donate Us</a></button>
            <button className="hover:underline hover:text-white "><a href="https://drive.google.com/file/d/1k6kl0i8mStnTsd0gPPnHb5x_feh1joOh/view?usp=sharing">Join Us</a></button>
            <button className="hover:underline hover:text-white" ><Link activeClass=" active" to="contact" spy={true} smooth={true}>Contact Us</Link></button>



          </div>
          <div className="ml-20">
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
        </div> */}


      </div>
    </>

  );
};
const NavMd = () => {
  return (
    <>
      <div className=" h-14 px-2 gap-10 flex items-center align-items justify-between ">

        <div className="w-full h-full rounded-lg flex">
          <a href="/">
            <img
              src={logo}
              alt="logo"
              className="w-20 h-18  rounded-full"
            />
          </a>

          <div className="w-full ml-4  h-full">
            <h1 className="font-bold text-gray-900 text-sm">"Malancha"</h1>
            <h1 className="font-bold text-gray-900 text-sm">(Sahitya, Sanskriti & Samajik Kendra)</h1>
            <h3 className="text-sm">An Non-Government Orgaisation</h3>
          </div>
        </div>
        <div className=" h-full w-full text-sm text-bold ">
          <div className="flex justify-between gap-1 mb-4 ">
            <a className="hover:underline hover:text-white " href="/">Home</a>
            <a className="hover:underline hover:text-white " href="/about">About</a>
            <a className="hover:underline hover:text-white " href="/gallery">Gallery</a>
            <button className="hover:underline hover:text-white "><a href="/donateUs">Donate Us</a></button>
            <button className="hover:underline hover:text-white "><a href="https://drive.google.com/file/d/1k6kl0i8mStnTsd0gPPnHb5x_feh1joOh/view?usp=sharing">Join Us</a></button>
            <button className="hover:underline hover:text-white" ><Link activeClass=" active" to="contact" spy={true} smooth={true}>Contact Us</Link></button>



          </div>
          <div className="ml-20">
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
const NavLg = () => {
  return (
    <>
      <div className="container mx-auto  px-4 gap-10 flex items-center align-items justify-between ">

        <div className="w-1/2 h-10 rounded-lg flex">
          <a href="/">
            <img
              src={logo}
              alt="logo"
              className="w-20 h-18 p-2 -mt-2  rounded-full"
            />
          </a>

          <div className="w-full ml-8 pb-4 h-full">
            <h1 className="font-bold text-gray-900 text-xl">"Malancha"(Sahitya, Sanskriti & Samajik Kendra)</h1>
            <h3 className="text-sm">A Non-Government Orgaisation</h3>
          </div>
        </div>
        <div className=" h-10  text-md text-bold rounded-lg ">
          <div className="w-full  flex gap-3 ">
            <a className="hover:underline hover:text-white " href="/">Home</a>
            <a className="hover:underline hover:text-white " href="/about">About</a>
            <a className="hover:underline hover:text-white " href="/gallery">Gallery</a>
            <a className="hover:underline hover:text-white " href="/donateUs">Donate Us</a>
            <a className="hover:underline hover:text-white " href="https://drive.google.com/file/d/1k6kl0i8mStnTsd0gPPnHb5x_feh1joOh/view?usp=sharing">Join Us</a>
            <button className="hover:underline hover:text-white" ><Link activeClass=" active" to="contact" spy={true} smooth={true}>Contact Us</Link></button>

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
      </div >
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-gradient-to-r from-white to-green-600 filter drop-shadow-lg mb-1 w-full p-4">
        <div className="md:hidden">
          {/* Mobile screen */}
          <NavSm />
        </div>
        <div className="hidden md:flex lg:hidden">
          {/* Medium/Tab screen */}
          <NavMd />
        </div>
        <div className="hidden w-full lg:flex">
          {/* Large screen */}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
