import React from "react";

const Contact = () => {
  return (
    <div className="bg-slate-600 bg-cover relative w-full h-screen flex justify-center items-center">
    <form className="flex flex-col gap-6 bg-white border rounded w-[60vw] h-[60vh] shadow-lg justify-evenly p-4">
        <h2 className="text-3xl font-bold text-center p-2">Contact Us</h2>
        <input className="bg-slate-200 rounded p-2" type="name" name="name" id="name" placeholder="Name" autoComplete="on" required></input>
        <input className="bg-slate-200 rounded p-2"type="email" name="email" id="email" placeholder="Email Address" autoComplete="on" required></input>
        <textarea className="bg-slate-200 rounded p-2 h-[20rem]" name="message" id="message" placeholder="Type your message here" autoComplete="on" required></textarea>
        <button type="submit" disabled></button>
    </form>
    </div>
  )
};

export default Contact;