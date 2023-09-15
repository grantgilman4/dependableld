import React from "react";
import Image from "next/image"
import Link from "next/link";
import {HiOutlineMail, HiPhone} from "react-icons/hi"
const Footer = () => {
    return (
        <div className="flex justify-evenly items-center bottom-0 fixed w-screen text-black bg-white p-2 font-bold">
       <Link href="https://aemail.com/98zz" className="flex"><HiOutlineMail size={30} color="#000000"></HiOutlineMail>
       <p className="">: jolinevedwards@gmail.com</p>
       </Link>
        <div className="flex">
        <HiPhone size={30} color="#000000"></HiPhone>
        <p className="text-lg">: 207.318.2042</p>
        </div>
        </div>
    )
}

export default Footer;