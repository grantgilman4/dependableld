"use client"
import React, {useState} from "react";
import Image from "next/image";
import { slideData } from "./slideData";
import {FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa"

const Slideshow = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }
    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <div id='gallery' className="max-w-screen mx-auto bg-slate-600">
            <h1 className="text-3xl text-white font-bold text-center p-2">Gallery</h1>
            <div className="relative flex justify-center p-4">
                {slideData.map((slide, index) => {
                    return (
                        <div key={index} className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>
                        <div className="relative flex justify-center p-4">
                            <FaArrowCircleLeft 
                            onClick={previousSlide}
                            className='absolute top-[50%] left-[30px] text-white/70 cursor-pointe select-none z-[2]' size={50}/>
                        {index===current && (
                            <Image 
                            src={slide.image} 
                            width='1440' 
                            height='600' 
                            object-fit='cover'
                            alt='photo1' 
                            />
                        )}
                        <FaArrowCircleRight 
                        onClick={nextSlide}
                        className='absolute top-[50%] right-[30px] text-white/70 cursor-pointe select-none z-[2]' size={50}/>
                        </div>
                        </div>
                    )
                })}
                </div>
            </div>
    );
};

export default Slideshow