// ProjectOverviewSection.tsx
import React from "react";

interface ProjectOverviewSectionProps {
  title?: string;
  description: string;
  image: string;
  themeColor?: string; // tailwind class or custom color class, e.g. "bg-[#f5f3ff]"
}

export function ProjectOverviewSection({
  title = "Overview",
  description,
  image,
  themeColor,
}: ProjectOverviewSectionProps) {
  return (
    <section className="py-5 ">
      <div className=" mx-auto">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-5 md:mb-12 items-start">
          <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
          <p className="md:text-gray-900 text-gray-800 col-span-2 leading-relaxed text-sm md:text-lg">
            {description}
          </p>
        </div>

        <div
          className={`relative rounded-3xl bg-[var(--themeColor)] h-55 md:h-96 lg:h-[28rem] px-6 md:px-10 md:mt-32 flex items-end justify-center overflow-visible`}
          style={{ "--themeColor": themeColor } as React.CSSProperties}
        >
          <div className="w-full max-w-6xl pointer-events-none">
            <img
              src={image}
              alt={title}
              className="
                absolute
                bottom-0
                left-1/2
                -translate-x-1/2
                object-contain
                h-[100%] md:h-[130%] lg:h-[130%]
              "
              style={{ transformOrigin: "center bottom" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
``