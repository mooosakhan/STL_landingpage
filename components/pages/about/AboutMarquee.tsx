"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export const AboutMarquee: React.FC = () => {
  const logos = [
    "/images/about/Logo1.png",
    "/images/about/Logo2.png",
    "/images/about/Logo3.png",
    "/images/about/Logo4.png",
    "/images/about/Logo5.png",
  ];

  return (
    <div className="relative overflow-hidden py-5 max-w-7xl mx-auto">
      {/* Left Fade */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-20" />
      {/* Right Fade */}
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-20" />
        <Marquee>
          {[...Array(5)].flatMap(() => logos).map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Partner Logo"
              className="opacity-70 w-full h-full hover:opacity-100 transition px-8 md:px-12"
            />
          ))}
        </Marquee>


      {/* <motion.div
        className="flex space-x-16 md:space-x-24"
        initial={{ x: "-100%" }}
        animate={{ x: ["100%", "-100%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {[...Array(5)].flatMap(() => logos).map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Partner Logo"
            className="opacity-70 w-full h-full hover:opacity-100 transition"
          />
        ))}
      </motion.div> */}
    </div>
  );
};
