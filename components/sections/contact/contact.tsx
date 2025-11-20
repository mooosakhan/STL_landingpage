"use client";
import React, { useState } from "react";
import Image from "next/image";

export function Contact() {
  const [selectedInterest, setSelectedInterest] = useState("UI/UX Design");

  const interests = [
    "Websites",
    "UI/UX Design",
    "AI Solutions",
    "Graphic Design",
    "Apps",
    "Other",
  ];

  return (
    <section className="min-h-screen flex flex-col lg:flex-row  items-stretch justify-center gap-7 px-6 md:px-6 lg:px-16 bg-[#F9F9F9] py-5 md:py-20">
      {/* Left Section */}
      <div
        className="w-full lg:w-1/2 flex flex-col justify-end items-center text-white text-center rounded-2xl overflow-hidden relative"
        style={{
          backgroundImage: "url('/images/contact-gradient.png')",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        {/* Content */}
        <div className="flex flex-col items-center justify-center px-6 sm:px-10 md:px-8 py-16 md:py-20 lg:py-24 text-white z-10  rounded-xl">
          <Image
            src="/images/logo-stl.png"
            alt="Contact Logo"
            width={60}
            height={60}
            className="mb-6"
          />
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-snug">
            Answering Every Question <br />
            with Clarity, Transparency, <br />
            and Lasting Trust
          </h2>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">
          I am Interested in
        </h3>

        {/* Interest Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
          {interests.map((item) => (
            <button
              key={item}
              onClick={() => setSelectedInterest(item)}
              className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-200 ${
                selectedInterest === item
                  ? "bg-[#4B0F31] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Form */}
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full text-lg sm:text-2xl placeholder:text-gray-900 font-medium border-b-2 border-gray-400 focus:border-[#4B0F31] outline-none py-4 bg-transparent"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full text-lg sm:text-2xl placeholder:text-gray-900 font-medium border-b-2 border-gray-400 focus:border-[#4B0F31] outline-none py-4 bg-transparent"
          />

          <input
            type="text"
            placeholder="Phone No"
            className="w-full text-lg sm:text-2xl placeholder:text-gray-900 font-medium border-b-2 border-gray-400 focus:border-[#4B0F31] outline-none py-4 bg-transparent"
          />

          <textarea
            placeholder="Project Details"
            className="w-full text-lg sm:text-2xl placeholder:text-gray-900 font-medium border-b-2 border-gray-400 focus:border-[#4B0F31] outline-none pt-4 bg-transparent"
          />

          <button
            type="submit"
            className="bg-[#4B0F31] text-lg sm:text-xl text-white mt-6 px-8 py-3 rounded-full hover:bg-[#3a0b26] transition-all w-full sm:w-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
