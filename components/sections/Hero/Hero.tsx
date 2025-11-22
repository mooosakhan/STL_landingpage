"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Hero() {
  const Router = useRouter();
  return (
    <section className="md:h-[85vh]  h-[90vh]  text-white overflow-hidden flex items-center justify-center ">
      <motion.div
        className="absolute inset-0 z-10 overflow-hidden h-[96.5vh] top-3"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .2, ease: "easeInOut" }}
          src="/images/image-hero-background2.png"
          alt="Hero Background"
          className="object xl:scale-x-98 absolute scale-x-97 h-[100%] w-full z-11 rounded-3xl"
        />
        <motion.img
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          src="/images/image-hero-background-gradient-1.png"
          alt="Hero Background"
          className="object-cover object-top absolute translate-y-1 w-full top-[-850] z-14 md:size-[6xl] rounded-3xl"
        />
        <motion.img
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          src="/images/image-hero-background-gradient-2.png"
          alt="Hero Background"
          className="object- object-top absolute translate-y-1 w-full  top-[-700] z-13 size-[6xl] rounded-3xl"
        />
      </motion.div>

      <div className="flex flex-col items-center justify-start h-full text-center z-12 w-full md:pt-[6rem] pt-[4rem] space-y-8 md:space-y-12 ">
        <motion.div
          className="flex w-full lg:flex-row flex-col justify-between lg:px-16 items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="lg:text-[3.5rem] sm:text-5xl text-3xl flex justify-start lg:text-start text-center font-semibold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Power Your Vision <br /> with Bold Digital <br /> Smart Moves
          </motion.div>
          <motion.div
            className="flex flex-col lg:text-start text-center text-lg text-gray-300 gap-4 lg:px-0 px-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <div className="max-w-lg">
              Stand out with smart, tailored digital solutions designed to turn innovative ideas into tangible results and drive success
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-8 gap-4 mt-0 items-center lg:justify-start justify-center">
              <motion.button
                onClick={() => Router.push('/contact')}
                className="bg-zinc-100 hover:bg-zinc-300 text-[#22081c] font-light md:py-3 md:px-6 px-4 py-2 md:text-base text-sm rounded-full transition-colors cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-6  w-full px-8 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="grid grid-cols-2 md:flex md:flex-row justify-center items-center gap-y-8 md:gap-y-0 md:space-x-8 lg:space-x-16 text-center">
            <motion.div
              className="flex flex-col justify-center items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            >
              <div className="md:text-4xl text-2xl font-bold">50+</div>
              <div className="text-zinc-400 text-">Projects Completed</div>
            </motion.div>

            <div className="hidden md:block w-[1px] h-[40px] bg-zinc-500/50 rounded-full"></div>

            <motion.div
              className="flex flex-col justify-center items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <div className="md:text-4xl text-2xl font-bold ">100+</div>
              <div className="text-zinc-400">Satisfied Clients</div>
            </motion.div>

            <div className="hidden md:block w-[1px] h-[40px] bg-zinc-500/50 rounded-full"></div>

            <motion.div
              className="flex flex-col justify-center items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            >
              <div className="md:text-4xl text-2xl font-bold">20+</div>
              <div className="text-zinc-400">Expert Developers</div>
            </motion.div>

            <div className="hidden md:block w-[1px] h-[40px] bg-zinc-500/50 rounded-full"></div>

            <motion.div
              className="flex flex-col justify-center items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.7, ease: "easeInOut" }}
            >
              <div className="md:text-4xl text-2xl font-bold">5+</div>
              <div className="text-zinc-400">Country Reach</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
