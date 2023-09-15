import React from "react";
import { TfiHandPointDown } from "react-icons/tfi"
const Contact = () => {
  return (
    <div className="bg-slate-200 bg-cover relative w-full h-screen flex justify-center items-center">
      <div className="flex-col justify-evenly items-center text-center text-lg font-semibold">
      <h3 className="text-center text-orange-600 text-3xl font-bold">We'd love to hear from you!</h3>
      <p>Feel free to inquiry via Phone or Email Below.</p>
      <div className="flex justify-center p-10">
      <TfiHandPointDown className="animate-bounce text-orange-600" size={150}></TfiHandPointDown>
        </div>
      </div>
    </div>
  )
};

export default Contact;