"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const FooterCTA = () => {
  const Router = useRouter();

  return (
    <div className="relative mx-auto mt-16 mb-10 max-w-6xl">
      {/* Background Image */}
      <Image
        src="/images/about/about-footer-cta.png"
        alt="Team Collaboration"
        width={1200}
        height={600}
        className="w-full h-[260px] md:h-[380px] lg:h-full md:object-cover rounded-xl"
      />

      {/* CTA Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <div className="relative z-10 text-white max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-semibold leading-tight mb-4">
            Shaping Better Digital <br /> Experiences for Everyone
          </h2>

          <p className="text-sm md:text-lg text-neutral-300 mb-6">
            Ready to bring your idea to life? Partner with us to create smarter,
            simpler solutions.
          </p>

          <button
            onClick={() => Router.push('/contact')}
            className="bg-white text-[#4D143D] px-6 py-2.5 rounded-full font-medium hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
