import React from "react";
import Image from "next/image"

const About = () => {
  return (
  <div className="flex flex-col items-center p-20">
    <Image src="/../public/images/profile.jpg" 
        width={500} 
        height={500} 
        alt="Joline"/>
    <h2 className="text-2xl">Joline Violette Edwards</h2>
    <p className="text-center text-black">As the owner and operator of Dependable Layout & Design, 
        I work hard to design your project to reflect <strong>YOUR</strong> style. 
        If you don’t know where to start, I am here to guide you with expertise.
        Proficient in InDesign, Illustrator and Photoshop, 
        I also have over 30 years experience in print production. 
        This means that I create files that match the printer’s specifications 
        — they work correctly, forgoing potential additional fees from the printer.</p>
  </div>
  )
};

export default About;