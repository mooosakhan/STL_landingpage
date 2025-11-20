"use client";

import Image from "next/image";

interface FooterCTAProps {
  title: string;
  subtitle: string;
}

export const FooterCTA = ({
  title,
  subtitle,
}: FooterCTAProps) => {
  return (
    <div className="relative mx-auto mt-16 mb-10">

      <Image
        src="/images/about/about-footer-cta.png"
        alt="footer-cta"
        width={1200}
        height={600}
        className="w-full h-[260px] md:h-[380px] lg:h-full omd:bject-cover rounded-xl"
      />

      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <div className="relative z-10 text-white max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-semibold leading-tight mb-4">{title}</h2>

          <p className="text-sm md:text-lg text-neutral-300 mb-6">
            {subtitle}
          </p>

          <button className="bg-white text-[#4D143D] px-6 py-2.5 rounded-full font-medium hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
