import Hero from "@/app/components/hero/page";
import { slideData } from "@/app/slideshow/slideData";
import Slideshow from "@/app/slideshow/page";
import Link from "next/link";
import Services from "@/app/services/page";

export default async function Home() {
  return (
    <div>
      <Hero heading="We are Dependable Layout & Design" 
      message="Providing a professional image for your business growth."
      />
      <Services id='services' />
      <Slideshow id='gallery' slides={slideData} />
    </div>
  )
}
