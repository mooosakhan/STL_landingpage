import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const StepByStep = () => {
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);

  useEffect(() => {
    const steps = [step1Ref, step2Ref, step3Ref, step4Ref];

    steps.forEach((ref, index) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          {
            opacity: 0,
            scale: 0.92,
            filter: "blur(6px)",
          },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.4,
            ease: "power4.out",
            delay: index * 0.25,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
              end: "top 40%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);


  return (
    <div className="relative w-full h-[120vh] md:h-[150vh]">
      <div className="absolute md:left-1/2 md:-translate-x-1/2">
        <AnimatedSteps />
      </div>
      <div
        ref={step1Ref}
        className="absolute top-0 h-full left-8 md:left-1/3 md:-translate-x-[335px] bg--300 md:max-w-1/2 translate-y-8 rounded-md"
      >
        <div className="flex flex-col md:items-end justify-end gap-4">
          <div className="text-2xl font-light">01</div>

          <div className="text-xl font-semibold">
            Fast-Track Your MVP with Seamless Branding
          </div>

          <p className="text-md max-w-xl">
            {/* Mobile brief text */}
            <span className="md:hidden block text-left">
              We help you build a clear and powerful brand identity—fast and
              with quality.
            </span>

            {/* Tablet version (optional) */}
            <span className="hidden sm:block md:hidden">
              We help you launch with a strong visual identity from day
              one—crafted with quality.
            </span>

            {/* Desktop full version */}
            <span className="hidden md:block text-right">
              We help you launch with a strong visual identity from day one.
              Logo, <br />
              UI/UX, and brand elements are crafted to reflect your product's{" "}
              <br />
              essence. Quick execution without sacrificing quality.
            </span>
          </p>
        </div>
      </div>

      <div
        ref={step2Ref}
        className="absolute top-0 h-full right-8 md:right-1/3 md:translate-x-[340px] px-8 md:px-0 bg--300 md:max-w-1/2 translate-y-77 rounded-md"
      >
        <div className="flex flex-col items-start md:items-start justify-start gap-4">
          <div className="text-2xl font-light">02</div>

          <div className="text-xl font-semibold">
            Fast-Track Your MVP with Seamless Branding
          </div>

          <p className="text-md max-w-xl">
            <span className="md:hidden block text-left">
              We help you build a clear and powerful brand identity—fast and with quality.
            </span>

            <span className="hidden sm:block md:hidden">
              We help you launch with a strong visual identity—crafted with clarity and quality.
            </span>

            <span className="hidden md:block text-left">
              We help you launch with a strong visual identity from day one. Logo, <br />
              UI/UX, and brand elements are crafted to reflect your product's <br />
              essence. Quick execution without sacrificing quality.
            </span>
          </p>
        </div>
      </div>

      <div
        ref={step3Ref}
        className="absolute top-0 left-8 md:left-1/3 md:-translate-x-[335px] bg--300 md:max-w-1/2 translate-y-141 rounded-md"
      >
        <div className="flex flex-col md:items-end justify-end gap-4">
          <div className="text-2xl font-light">03</div>

          <div className="text-xl font-semibold">
            Fast-Track Your MVP with Seamless Branding
          </div>

          <p className="text-md max-w-xl">
            {/* Mobile brief text */}
            <span className="md:hidden block text-left">
              We help you build a clear and powerful brand identity—fast and
              with quality.
            </span>

            {/* Tablet version (optional) */}
            <span className="hidden sm:block md:hidden">
              We help you launch with a strong visual identity from day
              one—crafted with quality.
            </span>

            {/* Desktop full version */}
            <span className="hidden md:block text-right">
              We help you launch with a strong visual identity from day one.
              Logo, <br />
              UI/UX, and brand elements are crafted to reflect your product's{" "}
              <br />
              essence. Quick execution without sacrificing quality.
            </span>
          </p>
        </div>
      </div>
      <div
        ref={step4Ref}

        className="
    absolute top-0
    right-8
    md:right-1/3 md:translate-x-[340px]
    px-8 md:px-0
    bg--300 md:max-w-1/2
    translate-y-207 rounded-md
  "
      >
        <div className="flex flex-col items-start md:items-start justify-start gap-4">
          <div className="text-2xl font-light">04</div>

          <div className="text-xl font-semibold">
            Fast-Track Your MVP with Seamless Branding
          </div>

          <p className="text-md max-w-xl">
            <span className="md:hidden block text-left">
              We help you build a clear and powerful brand identity—fast and with quality.
            </span>

            <span className="hidden sm:block md:hidden">
              We help you launch with a strong visual identity—crafted with clarity and quality.
            </span>

            <span className="hidden md:block text-left">
              We help you launch with a strong visual identity from day one. Logo, <br />
              UI/UX, and brand elements are crafted to reflect your product's <br />
              essence. Quick execution without sacrificing quality.
            </span>
          </p>
        </div>
      </div>

    </div>
  );
};

export { StepByStep };

const StepSVG = () => (
  <svg
    width="24"
    height="1039"
    viewBox="0 0 24 1039"
    fill="none"
    className="step-svg"
  >
    {/* main line */}
    <path id="bigLine" d="M12 22V1039" stroke="black" strokeWidth="3" />

    {/* circles with ids */}
    <rect id="circle1" width="22" height="22" rx="11" fill="black" />
    <rect id="circle2" x="1" y="268" width="22" height="22" rx="11" fill="black" />
    <rect id="circle3" x="1" y="521" width="22" height="22" rx="11" fill="black" />
    <rect id="circle4" x="2" y="782" width="22" height="22" rx="11" fill="black" />
  </svg>
);

export const AnimatedSteps = () => {
  useEffect(() => {
    const path = document.querySelector<SVGPathElement>("#bigLine");
    if (!path) return;

    const length = path.getTotalLength();

    const circles = [
      { el: document.querySelector("#circle1"), y: 22 },
      { el: document.querySelector("#circle2"), y: 268 },
      { el: document.querySelector("#circle3"), y: 521 },
      { el: document.querySelector("#circle4"), y: 782 },
    ];

    // Hide circles initially
    circles.forEach((c) => {
      gsap.set(c.el, { opacity: 0, scale: 0.6 });
    });

    // Initial hidden line
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // Grow line on scroll
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".step-svg-wrapper",
        start: "top center",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress; // 0 → 1
          const currentLength = length * progress;
          const currentY = 22 + currentLength; // current drawn Y

          // reveal circles when line passes them
          circles.forEach((c) => {
            if (currentY >= c.y) {
              gsap.to(c.el, {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: "back.out(1.7)",
              });
            }
          });
        },
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="step-svg-wrapper">
      <StepSVG />
    </div>
  );
};
