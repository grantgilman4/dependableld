"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  return (
      <Link href="/">
        <Image
          src="/images/newLogo.svg"
          alt="Dependable Layout & Design"
          width="220"
          height="0"
          className="relative z-10 p-4"
        />
      </Link>
  );
};

export default Logo;