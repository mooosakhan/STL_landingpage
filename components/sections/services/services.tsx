
"use client";


import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader/SectionHeader";
import { useRouter } from "next/navigation";

export function Services() {
  const Router = useRouter();

  const services = [
    {
      id: "01",
      title: "Design & UX",
      desc: "We create intuitive and engaging designs that prioritize user experience, ensuring your digital presence is both visually appealing and easy to navigate.",
      img: "/images/service-design.png", // replace with your actual SVG paths
    },
    {
      id: "02",
      title: "Web & App Development",
      desc: "Our development team builds robust, scalable web and mobile applications using the latest technologies to deliver high-performance solutions tailored to your business needs.",
      img: "/images/service-webdevelopment.png",
    },
    {
      id: "03",
      title: "AI Solutions",
      desc: "We leverage the power of artificial intelligence to create innovative solutions that drive efficiency and unlock new opportunities.",
      img: "/images/service-ai.png",
    },
  ];

  return (
    <section className="w-full py-5 md:py-20">
      <div className="max-w-8xl mx-auto px-6 lg:px-14">
        {/* Header */}
        <SectionHeader
          title={
            <>
              End-to-End Digital Services That Turn Ideas
              <br className="hidden md:block" />
              Into Impact
            </>
          }
          description="From concept to launch, we provide comprehensive digital services that bring your vision to life."
          layout="split"
        />


        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-[#f4f4f4] rounded-md duration-300 pl-6 pt-6  flex flex-col justify-between overflow-hidden"
            >
              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-md leading-relaxed mb-6">
                  {service.desc}
                </p>
                <button 
                  onClick={() => Router.push('/contact')}
                  className="flex items-center gap-1 text-md text-white bg-[#55144C] hover:bg-[#44103e] px-4 py-2 rounded-md"
                >
                  Get Started <ArrowUpRight size={14} />
                </button>
              </div>

              <div className="flex justify-between items-end mt-8">
                <span className="text-4xl font-light text-black pb-6">{service.id}</span>
                <Image
                  src={service.img}
                  alt={service.title}
                  width={service.id === "01" ? 250 : (service.id === "02" ? 190 : 180)}
                  height={180}
                  className=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
