import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <>
    <Navbar />
    <Hero/>
    <Experience/>
    <Education/>
   </>
  );
}
