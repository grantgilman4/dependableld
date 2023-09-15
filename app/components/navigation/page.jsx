"use client";
import Link from "next/link"
import { useEffect, useState } from "react";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Logo from "../../../public/images/logo"

const Navigation = () => {

    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor("#ffffff")
                setTextColor("#000000")
            } else {
                setColor("transparent")
                setTextColor("#FF4D00")
            }
        }
        window.addEventListener('scroll', changeColor);
    }, [])

  return (
    <div style={{backgroundColor: `${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in duration-300 h-[110px]">
        <div className="max-w-[1240px] m-auto flex justify-between items-center px-4 mb-0 text-black h-">
            <Logo />
            <ul style={{color: `${textColor}`}} className="hidden sm:flex font-semibold text-lg">
                <li className="p-4 hover:text-orange-600">
                    <Link href='/collections'>Gallery</Link>
                </li>
                <li className="p-4 pr-6 hover:text-orange-600">
                    <Link href='/about'>About</Link>
                </li>
                <li className="p-4 ">
                    <Link href='/contact' className="p-4 font-extrabold rounded-xl bg-gradient-to-b from-orange-600 to-orange-700 text-white outline outline-5 hover:animate-pulse duration-75">Contact</Link>
                </li>
            </ul>
            {/* Mobile Button */}
            <div onClick={handleNav} className="block sm:hidden z-10 pr-10">
                {nav ? <AiOutlineClose size={50} style={{color: '#000000'}}/> : <AiOutlineMenu size={50} style={{color: `${textColor}`}} />}
            </div>
            {/* Mobile Menu */}
            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'}>
                <ul>
                <li onClick={handleNav} className="p-4 text-4xl hover:text-orange-600">
                    <Link href='/#gallery'>Gallery</Link>
                </li>
                <li onClick={handleNav} className="p-4 text-4xl hover:text-orange-600">
                    <Link href='/about'>About</Link>
                </li>
                <li onClick={handleNav} className="p-4 text-4xl hover:text-orange-600">
                    <Link href='/contact'>Contact Us</Link>
                </li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Navigation;