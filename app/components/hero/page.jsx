"use client"
import React from "react";
import Link from "next/link";

const Hero = ({heading}) => {
    return (
    <section>
        {/* Overlay */}
        <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-image">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/5 z-[2]"/>
            <div className="p-5 text-white z-[2] mt-[-10rem] text-center">
                <h1 className="text-[5rem] font-bold py-1">Hello.</h1>
                <h2 className="text-[2rem] font-bold py-3">{heading}</h2>
                <p className="text-[1.5rem] mb-4 font-semibold">Providing a professional image for your business growth.</p>
                <Link href='#gallery' className="bg-orange-600 hover:bg-orange-800 text-white-600 font-semibold my-4 py-2 px-2 rounded ">Our Gallery</Link> 
            </div>
        </div>
    </section>
    )
}

export default Hero;