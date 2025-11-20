"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="h-[86vh] text-white overflow-hidden flex items-center justify-center ">
      {/* Animated Background Image */}
      <div
        // initial={{ opacity: 0.3, scale: 1 }}
        // animate={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-10 overflow-hidden"
      >
        <Image
          src="/images/hero-background.svg"
          alt="Hero Background"
          fill
          className="object-cover scale-y-97 xl:scale-x-98  scale-x-97 rounded-3xl"
          priority
        />
      </div>


      <div className="flex flex-col items-center justify-start h-full text-center z-12 w-full md:pt-[6rem] pt-26 space-y-8 md:space-y-12 ">
        <div className="flex w-full lg:flex-row flex-col justify-between lg:px-16 items-center gap-6">
          <div className="lg:text-[3.5rem] sm:text-5xl text-3xl flex justify-start lg:text-start text-center font-semibold leading-tight">
            Building Intelligent
            <br /> Digital Solutions for a
            <br /> Smarter Tomorrow
          </div>
          <div className="flex flex-col lg:text-start text-center text-lg text-gray-300 gap-4 lg:px-0 px-12">
            <div>
              We create clean, functional, and impactful digital products <br /> tailored to your brand.
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-8 gap-4 mt-0 items-center lg:justify-start justify-center">
              <button className="bg-zinc-100 hover:bg-zinc-300 text-[#22081c] font-light md:py-3 md:px-6 px-4 py-2 md:text-base text-sm rounded-full transition-colors cursor-pointer">
                Get Started
              </button>
              {/* <div className="hidden md:flex">
                 4.8 Trust Score
              </div> */}
            </div>
          </div>
        </div>

        <div className="mt-6  w-full px-8 ">
          <div className="grid grid-cols-2 md:flex md:flex-row justify-center items-center gap-y-8 md:gap-y-0 md:space-x-8 lg:space-x-16 text-center">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="md:text-4xl text-3xl font-bold">500+</div>
              <div className="text-zinc-400">Projects Completed</div>
            </div>

            <div className="hidden md:block w-[1px] h-[40px] bg-zinc-500/50 rounded-full"></div>

            <div className="flex flex-col justify-center items-center gap-2">
              <div className="md:text-4xl text-3xl font-bold ">100+</div>
              <div className="text-zinc-400">Satisfied Clients</div>
            </div>

            <div className="hidden md:block w-[1px] h-[40px] bg-zinc-500/50 rounded-full"></div>

            <div className="flex flex-col justify-center items-center gap-2">
              <div className="md:text-4xl text-3xl font-bold">20+</div>
              <div className="text-zinc-400">Expert Developers</div>
            </div>

            <div className="hidden md:block w-[1px] h-[40px] bg-zinc-500/50 rounded-full"></div>

            <div className="flex flex-col justify-center items-center gap-2">
              <div className="md:text-4xl text-3xl font-bold">5+</div>
              <div className="text-zinc-400">Country Reach</div>
            </div>
          </div>
        </div>


      </div>

    </section>
  );
}
