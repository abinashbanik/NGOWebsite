import React, { useState } from 'react'
import { Link } from 'react-scroll'
import logo from "../Resources/logo.png";
import { IoIosMail } from "react-icons/io";
import { AiTwotonePhone, AiOutlineHome, AiOutlineClose } from "react-icons/ai";


const NavSm = () => {
  const [showMenu, setShowMenu] = useState(false);


  let menu;
  // let menuMask;
  if (showMenu) {
    menu =
      <div onClick={() => setShowMenu(false)} className="fixed transition duration-500 ease-in-out bg-blue-600 bg-gradient-to-l from-white to-green-300 filter top-20 left-0 w-1/2 h-96 z-40 rounded-br-lg drop-shadow-lg">
        <div className="flex flex-col gap-1 w-20 ml-8 mt-4">
          <a className="hover:underline hover:text-white hover:bg-gradient-to-l from-white to-green-300 hover:shadow-lg border border-gray-400 p-2 flex gap-1 rounded-lg " href="/"><AiOutlineHome className=" text-2xl" />Home</a>
          <a className="hover:underline hover:text-white hover:bg-gradient-to-l from-white to-green-300 hover:shadow-lg border border-gray-400 p-2 flex rounded-lg" href="/about">About</a>
          <a className="hover:underline hover:text-white hover:bg-gradient-to-l from-white to-green-300 hover:shadow-lg border border-gray-400 p-2 rounded-lg w-20" href="/gallery">Gallery</a>
          <a className="hover:underline hover:text-white hover:bg-gradient-to-l from-white to-green-300 hover:shadow-lg border border-gray-400 p-2 rounded-lg w-24 " href="/donateUs">Donate Us</a>
          <a className="hover:underline hover:text-white hover:bg-gradient-to-l from-white to-green-300 hover:shadow-lg border border-gray-400 p-2 rounded-lg w-24" href="https://drive.google.com/file/d/1k6kl0i8mStnTsd0gPPnHb5x_feh1joOh/view?usp=sharing">Join Us</a>
          <Link className="hover:underline hover:text-white hover:bg-gradient-to-l from-white to-green-300 hover:shadow-lg border border-gray-400 p-2 rounded-lg w-28 hover:animate-pulse" activeClass=" active" to="contact" spy={true} smooth={true}>Contact Us</Link>
          <button onClick={() => setShowMenu(false)} className=" fixed right-0 bottom-1 hover:underline hover:text-white hover:bg-red-400 bg-black-300 border border-gray-400 flex w-24 pb-2 pl-2 gap-1 h-8 rounded-lg text-xl"><AiOutlineClose className="text-md mt-1" /> Close</button>
        </div>

      </div>
    // menuMask =

    //   <div className="fixed bg-gray-900 bg-opacity-50 top-0 left-0 w-2/3 h-96 rounded-br-xl  drop-shadow-lg"
    //     onClick={() => setShowMenu(false)}
    //   >

    //   </div>
  }

  const [isOpen, setisOpen] = React.useState(false);
  function handleClick() {
    setisOpen(!isOpen);
  }
  return (
    <>


      <div className=" h-12 rounded-b-lg pb-10 px-2 top-0 gap-4 flex items-center align-items justify-between ">

        <div className="w-full h-full rounded-lg flex">
          <a href="/">
            <img
              src={logo}
              alt="logo"
              className="w-16 h-18  rounded-full"
            />
          </a>

          <div className="w-full ml-4 tracking-tight leading-4 h-full">
            <h3 className="font-semibold flex justify-text text-gray-900 text-sm">"Malancha"</h3>
            <h1 className="font-semibold text-gray-900 text-xs">(Sahitya, Sanskriti & Samajik Kendra)</h1>
            <h3 className="text-xs">An Non-Government Orgaisation</h3>
          </div>
        </div>
        <div>
          <button type="button" className="block "
            // onClick={handleClick}
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg className="h-8 mt-8 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {isOpen && (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              )}
              {!isOpen && (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
          {/* {menuMask} */}
          {menu}
        </div>


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
      <nav className="bg-gradient-to-r from-white to-green-600 filter drop-shadow-lg mb-1 w-full  p-4">
        <div className="md:hidden z-40">
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
