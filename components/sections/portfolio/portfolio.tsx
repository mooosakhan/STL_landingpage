import { SectionHeader } from "@/components/common/SectionHeader/SectionHeader";
import Image from "next/image";

export function Portfolio() {
  const showcase = [
    {
      id: 1,
      image: "/images/portfolio-smit.png",
      bg: "bg-[#B7E7A3]",
    },
    {
      id: 2,
      image: "/images/portfolio-nahfkidunya.png",
      bg: "bg-[#10B9A4]",
    },
    {
      id: 3,
      image: "/images/portfolio-snapfreez.png",
      bg: "bg-[#B9A6F6]",
    },
    {
      id: 4,
      image: "/images/portfolio-lms.png",
      bg: "bg-[#B7E7A3]",
    },
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center py-5 md:py-16">
      <div className="w-full mx-auto px-6 lg:px-16">
        <SectionHeader
          title={
            <>
              Showcasing Innovation, Strategy, and Design
              <br className="hidden md:block" />
              Through Impactful Digital Creations
            </>
          }
          description="Turning ideas into meaningful experiences through strategy, design, and technology."
          layout="split"
        />

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full mt-8 md:mt-10">
          {showcase.map((item) => (
            <div
              key={item.id}
              className={`flex justify-center items-center  rounded-xl  transition-transform duration-500`}
            >
              <Image
                src={item.image}
                alt={`Showcase ${item.id}`}
                width={700}
                height={400}
                className="object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
