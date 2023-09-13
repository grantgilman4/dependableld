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
                setTextColor("#ffffff")
            }
        }
        window.addEventListener('scroll', changeColor);
    }, [])

  return (
    <div style={{backgroundColor: `${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
        <div className="max-w-[1240px] m-auto flex justify-between items-center px-4 mb-0 text-black">
            <Logo />
            <ul style={{color: `${textColor}`}} className="hidden sm:flex font-semibold">
                <li className="p-4 hover:text-orange-600">
                    <Link href='/#gallery'>Gallery</Link>
                </li>
                <li className="p-4 hover:text-orange-600">
                    <Link href='/services'>Services</Link>
                </li>
                <li className="p-4 hover:text-orange-600">
                    <Link href='/about'>About</Link>
                </li>
                <li className="p-4 hover:text-orange-600">
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
            {/* Mobile Button */}
            <div onClick={handleNav} className="block sm:hidden z-10">
                {nav ? <AiOutlineClose size={40} style={{color: '#000000'}}/> : <AiOutlineMenu size={40} style={{color: `${textColor}`}} />}
            </div>
            {/* Mobile Menu */}
            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'}>
                <ul>
                <li className="p-4 text-4xl hover:text-orange-600">
                    <Link href='/#gallery'>Gallery</Link>
                </li>
                <li className="p-4 text-4xl hover:text-orange-600">
                    <Link href='/services'>Our Services</Link>
                </li>
                <li className="p-4 text-4xl hover:text-orange-600">
                    <Link href='/about'>About</Link>
                </li>
                <li className="p-4 text-4xl hover:text-orange-600">
                    <Link href='/contact'>Contact</Link>
                </li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Navigation;