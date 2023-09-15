import React from "react"

const Collections = () => {
    return (
        <div className="width-[50vw] flex flex-col justify-center items-center">
            <h3 className="mt-[110px] bg-orange-600 text-center text-white text-2xl font-bold py-2 w-screen">Collections</h3>
            <div id="grid-container" className="grid sm:grid-cols-2 gap-8 text-lg font-semibold text-orange-600 text-center p-3 pt-8 max-sm:h-screen max-sm:pb-[50px]">
                <div className="pt-8 bg-gradient-to-tr from-slate-200 p-2  w-[200px] h-[100px] object-cover text-lg rounded hover:scale-125 transition duration-300">Advertising</div>
                <div className="pt-8 bg-gradient-to-tr from-slate-200 w-[200px] h-[100px] object-cover text-lg rounded hover:scale-125 transition duration-300">Books</div>
                <div className="pt-8 bg-gradient-to-tr from-slate-200 w-[200px] h-[100px] object-cover text-lg rounded hover:scale-125 transition duration-300">Business Cards</div>
                <div className="pt-8 bg-gradient-to-tr from-slate-200 w-[200px] h-[100px] object-cover text-lg rounded hover:scale-125 transition duration-300">Brochures</div>
                <div className="pt-8 bg-gradient-to-tr from-slate-200 w-[200px] h-[100px] object-cover text-lg rounded hover:scale-125 transition duration-300">Logos</div>
                <div className="pt-8 bg-gradient-to-tr from-slate-200 w-[200px] h-[100px] object-cover text-lg rounded hover:scale-125 transition duration-300">Magazines</div>
            </div>
        </div>
    )
}

export default Collections