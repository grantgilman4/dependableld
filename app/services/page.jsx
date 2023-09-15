import React from "react";
import Image from "next/image";

const Services = () => {
    return (
      <div id="services" className="bg-slate-200 flex justify-center items-center relative">
        <div className="bg-white w-full">
          <h3 className="bg-gradient-to-b from-orange-600 to-orange-700 text-center text-white text-2xl font-bold py-2">Our Services</h3>
          <div className="grid lg:grid-cols-6 sm:grid-cols-3 sm:grid-cols-2 justify-evenly items-center text-center font-bold">
            <div className="p-10 flex flex-col items-center">
              <p>Graphic Design</p>
              <Image src='/servicesIcons/design.png' width={100} height={200 }/>
            </div>
            <div className="p-10 flex flex-col items-center">
              <p>Page Layout</p>
              <Image src='/servicesIcons/layout.png' width={100} height={250} />
              </div>
            <div className="p-10 flex flex-col items-center">
            <p>Proofreading</p>
              <Image src='/servicesIcons/proofread.png' width={100} height={250} />
            </div>
            <div className="p-10 flex flex-col items-center">
              <p>Binding & Laminating</p>
              <Image src='/servicesIcons/binding.png' width={100} height={250 }/>
            </div>
            <div className="p-10 flex flex-col items-center">
              <p>Printing</p>
              <Image src='/servicesIcons/printing.png' width={100} height={250} />
              </div>
            <div className="p-10 flex flex-col items-center">
              <p>Mailing Services</p>
              <Image src='/servicesIcons/mailing.png' width={100} height={250} />
            </div>
          </div>
          </div>
        </div>
      )
    };

export default Services