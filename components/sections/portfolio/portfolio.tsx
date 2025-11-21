"use client";
import { SectionHeader } from "@/components/common/SectionHeader/SectionHeader";
import Image from "next/image";
import pagesData from "@/assets/json/allworks.json";
import { useRouter } from "next/navigation";

// ---- Types ---- //
type DataState = "LOADING" | "SUCCESS" | "ERROR";

interface WorkDuration {
  year?: string | number;
  month?: string | number;
  week?: string | number;
}

interface WorkPage {
  id: string;
  slug: string;
  tagline: string;
  title: string;
  services: string[];
  duration: WorkDuration;
  industries: string[];
  logo: string;
  themeColor: string;
  overview: string;
  overviewImage?: string;
  previewImage?: string;
  challenges: { id: string; title: string; description: string }[];
  challengesMockups: string[];
  approach: string;
  approachMockups: string[];
  approachMockupType: "grid" | "masonry";
  features: { id: string; title: string; description: string }[];
  downBanner: string;
  discoverMorePreviewImage?: string;
  testimonials: {
    id: string;
    name: string;
    position: string;
    company: string;
    photo: string;
    feedback: string;
  }[];
  meta: {
    title: string;
    description: string;
  };
}

interface PageData {
  link: string;
  image: string | undefined;
}


export function Portfolio() {
   
  const router = useRouter();

  const showcase = [
    {
      id: 1,
      image: pagesData[1].showcaseImage3,
      link: pagesData[1].id
    },
    {
      id: 2,
      image: pagesData[2].showcaseImage3,
      link: pagesData[2].id
    },
    {
      id: 3,
      image: pagesData[0].showcaseImage3,
      link: pagesData[0].id
    },
    {
      id: 4,
      image: pagesData[1].showcaseImage4,
      link: pagesData[1]?.id
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
              className={`flex justify-center items-center rounded-xl transition-transform duration-500 cursor-pointer`}
              onClick={
                () => router.push("/works/" + item.link)
              }
            >
              <Image
                src={item.image || ""}
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
