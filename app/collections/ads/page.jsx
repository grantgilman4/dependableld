import React from "react";
import Image from "next/image";
import Link from "next/link";

const Ads = () => {
    return (
        <div className="flex flex-col w-screen h-screen items-center">
            <Link href="/collections"><p className="pt-[110px] text-orange-600 hover:underline">Back</p></Link>
            <Image className="pb-20" priority={true} src='/ads/ads.png' width={800} height={500} alt="logos" />
        </div>
    )
}

export default Ads;