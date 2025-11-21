"use client";

import { useState } from "react";
import { Plus, Minus, MessageSquare, Phone } from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "@/components/common/SectionHeader/SectionHeader";


export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const faqs = [
    {
      id: 1,
      question: "What industries does Saylani Tech work with?",
      answer:
        "We collaborate with startups, enterprises, and nonprofits across diverse industries — from fintech and education to healthcare and e-commerce.",
    },
    {
      id: 2,
      question: "How long does a typical project take to complete?",
      answer:
        "Timelines vary based on project scope, but most projects are completed between 4 to 12 weeks with clear milestones and updates.",
    },
    {
      id: 3,
      question: "Do you offer post-launch support and maintenance?",
      answer:
        "Yes, we provide continuous support, updates, and performance optimization after your product launch.",
    },
    {
      id: 4,
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in React, Next.js, Node.js, Express, MongoDB, PostgreSQL, AWS, and various AI-powered solutions.",
    },
    {
      id: 5,
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in React, Next.js, Node.js, Express, and various AI-powered solutions.",
    },
  ];

  return (
    <section className="w-full py-15 md:py-2">
      <div className="max-w-8xl mx-auto px-6 lg:px-16">
        <SectionHeader
          title={
            <>
              Answering Every Question with Clarity,
              <br className="hidden md:block" />
              Transparency, and Lasting Trust
            </>
          }
          description="Their ability to turn complex ideas into smooth, intuitive solutions truly sets them apart. We’re thrilled with the results."
          layout="split"
        />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 md:mt-10">
          {/* Left Column - FAQs */}
          <div className="col-span-2 space-y-4 max-h-[588px]  rounded-xl">
            {faqs.map((faq, index) => (
              <div key={faq.id}>
                <div
                  className={`w-full flex flex-col text-left font-medium rounded-lg transition-all duration-200  
                    ${activeIndex === index
                      ? "bg-[#4D143D] text-white"
                      : "bg-zinc-100 hover:bg-zinc-200 text-gray-900"
                    }`}
                >
                  <button
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                    className="flex justify-between text-lg md:text-xl items-center w-full px-6 py-6"
                  >
                    <span>
                      {faq.id}. {faq.question}
                    </span>
                    {activeIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </button>

                  {activeIndex === index && (
                    <div className="px-6 pb-4 text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>


          {/* Right Column */}
          <div className="lg:flex flex-col hidden  gap-6">
            <div className="bg-[#4D143D] text-white rounded-2xl p-6 sm:p-10 gap-2 flex flex-col items-center text-center w-full">
              <div className="w-[170px] h-[170px] relative">
                <Image
                  src="/images/icon-faq-message.png"
                  alt="Contact Icon"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>

              <h3 className="text-lg sm:text-2xl font-medium">Further Question?</h3>
              <p className="text-sm opacity-80">SAAS Platform</p>

              <button className="bg-white text-[#4D143D] px-5 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                Contact us
              </button>
            </div>

            {/* Availability Card */}
            <div className="border border-[#4D143D] rounded-2xl p-5 sm:px-6 py-8 w-full flex items-center justify-center gap-4">
              <div className="bg-[#4D143D] rounded-full p-3 flex items-center justify-center shrink-0">
                <Phone className="text-white" />
              </div>

              <div className="">
                <p className="text-sm text-gray-500">Your Vision our craft</p>
                <h4 className="text-xl sm:text-2xl font-medium">Availability 24/7</h4>
                <p className="text-sm sm:text-base text-gray-700 mt-1">03121197489</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
