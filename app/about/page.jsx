import React from "react";
import Image from "next/image";

const About = () => {
  return (
  <div className="bg-gradient-to-tr from-slate-400 to-slate-100">
  <h3 className="mt-[110px] text-orange-600 text-center text-3xl font-extrabold pt-10 pb-4">Why Dependable?</h3>
  <p className="text-xl font-semibold text-center p-2">It is harder than ever for businesses to find a graphic designer that’s<br/> experienced, accurate, on-time, and most importantly within budget. </p>
  <p className="text-black font-extrabold text-center text-2xl pb-10">We are here to be your Dependable partner.</p>

  <div className="flex justify-center items-center bg-white shadow-lg max-sm:flex-col max-sm:h-screen">
    <div className="flex flex-col items-center p-10">
      <Image src="/images/profile.png" 
        width={200} 
        height={300}
        alt="joline"
       />
      <h4 className="text-lg font-bold pt-2">Joline V. Edwards</h4>
      <h5 className="text-lg text-orange-600">Owner & Operator</h5>
    </div>
    <div className="font-semibold bg-orange-600 rounded-xl p-5 w-[500px] text-white">
      <p className="p-2 italic bg-white text-orange-600 rounded-xl mb-2">“We work hard to design your project to reflect YOUR style. If you don’t know where to start, We are here to guide you with expertise.”</p>
      <p>Joline is proficient in InDesign, Illustrator and Photoshop; accompanied by over 30 years experience in print production. She makes sure to create files that match the printer’s specifications — they work correctly, forgoing potential additional fees from the printer.</p>
    </div>
    </div>
  </div>
  )
};

export default About;