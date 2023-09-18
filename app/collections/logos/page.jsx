import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logos = () => {
    return (
        <div className="flex flex-col w-screen h-screen items-center justify-center bg-slate-200">
            <Link href="/collections"><p className="pt-[110px] text-orange-600 hover:underline">Back</p></Link>
            <Image className="self-center" src='/logos/logos.jpg' width={800} height={500} alt="logos" />
        </div>
    )
}

export default Logos;