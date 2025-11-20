"use client";

import React from "react";

export const AboutHeader: React.FC = () => {
  return (
    <div className="py-5 space-y-6 md:space-y-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl max-w-5xl leading-snug">
        Shaping Better Digital Experiences for Everyone
      </h1>

      <p className="text-base md:text-lg text-neutral-700 max-w-6xl">
        Turning ideas into refined digital products that help people connect, work,
        and grow — built through a careful blend of research, creativity, and
        technology to ensure every user interaction truly matters.
      </p>
    </div>
  );
};
