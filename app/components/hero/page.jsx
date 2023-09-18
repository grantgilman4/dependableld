"use client"
import React from "react";
import Link from "next/link";
import { CgScrollV } from "react-icons/cg";
const Hero = ({heading}) => {

    return (
    <section>
        {/* Overlay */}
        <div className="flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover custom-image">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[2]"/>
            <div className="p-5 text-white z-[2] mt-[-10rem] text-center">
                <h1 className="text-[5rem] font-bold">HELLO</h1>
                <h2 className="text-[2rem] font-bold py-3">{heading}</h2>
                <p className="text-[1.5rem] mb-8 font-semibold">Providing a professional image for your business growth.</p>
                <Link href="#services" className="text-white font-bold bg-gradient-to-b from-orange-600 to-orange-700 border-2 rounded-xl p-2 cursor-pointer">Our Services</Link>
            </div>
            <div className="pt-20">
            <CgScrollV className="animate-bounce duration-1000 text-white" size={40}/>
            </div>
        </div>
    </section>
    )
}

export default Hero;