"use client"
import React, {useState} from "react";
import Image from "next/image";
import { slideData } from "./slideData";
import {FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa"
import Link from "next/link";

const Slideshow = () => {
    const [current, setCurrent] = useState(0);
    const length = slideData.length

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }
    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <div id='gallery' className="w-screen bg-white">
            <h3 className="bg-gradient-to-b from-orange-600 to-orange-700 text-center text-white text-2xl font-bold py-2">Work Samples</h3>
            <div className="text-center w-[50vw] h-[50vh] ml-[25vw]">
            <div className="relative flex justify-center p-6">
                {slideData.map((slide, index) => {
                    return (
                        <div key={index} className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>
                        <div className="relative">
                            <FaArrowCircleLeft 
                            onClick={previousSlide}
                            className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]' size={40} color="#ffffff"/>
                        {index === current && (
                            <div className="pb-8">
                                <p className="font-semibold"><Link href="/collections" className="underline hover:text-orange-600">See more</Link></p>
                            <Image 
                            src={slide.image} 
                            style={{width: "auto", height: "auto"}}
                            width="500"
                            height="200" 
                            object-fit='cover'
                            alt='photo1' 
                            />
                            </div>
                        )}
                        <FaArrowCircleRight 
                        onClick={nextSlide}
                        className='absolute top-[50%] right-[30px] text-white/70 cursor-pointe select-none z-[2]' size={40}/>
                        </div>
                        </div>
                    )
                })}
                </div>
                </div>
            </div>
    );
};

export default Slideshow;