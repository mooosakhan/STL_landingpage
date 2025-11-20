"use client";

import Image from "next/image";
import React from "react";

export const OfficeGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-10 gap-4 md:gap-6 my-10 md:my-16">

      {/* Full width */}
      <Image
        src="/images/about/about-office-1.png"
        alt="Office 1"
        width={1200}
        height={600}
        className="w-full h-[240px] md:h-[350px] lg:h-[420px] col-span-10 object-cover rounded-xl"
      />

      {/* Left big */}
      <Image
        src="/images/about/about-office-2.png"
        alt="Office 2"
        width={1200}
        height={600}
        className="w-full h-[240px] md:h-[350px] lg:h-[420px] col-span-10 md:col-span-7 object-cover rounded-xl"
      />

      {/* Right small */}
      <Image
        src="/images/about/about-office-3.png"
        alt="Office 3"
        width={1200}
        height={600}
        className="w-full h-[240px] md:h-[350px] lg:h-[420px] col-span-10 md:col-span-3 object-cover rounded-xl"
      />
    </div>
  );
};
