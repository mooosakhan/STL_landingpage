"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface PageThumbObj {
  link: string;
  image: string;
}

interface DiscoverMoreProps {
  nextPage: string;
  nextPageData: PageThumbObj | string | null;
  previousPage: string;
  previousPageData: PageThumbObj | string | null;
}

const DiscoverMore: React.FC<DiscoverMoreProps> = ({
  nextPage,
  nextPageData,
  previousPage,
  previousPageData,
}) => {
  const router = useRouter();

  const previousImage =
    typeof previousPageData === "string"
      ? previousPageData
      : previousPageData?.image;

  const previousLink =
    typeof previousPageData === "string"
      ? previousPage
      : previousPageData?.link || previousPage;

  const nextImage =
    typeof nextPageData === "string" ? nextPageData : nextPageData?.image;

  const nextLink =
    typeof nextPageData === "string"
      ? nextPage
      : nextPageData?.link || nextPage;

  const handleClick = (slug: string | undefined | null) => {
    if (!slug) return;
    router.push(`/works/${slug}`);
  };

  return (
    <section className="py-5">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-14">
        Discover More Cases
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
        {/* Previous case */}
        {previousImage && (
          <button
            type="button"
            onClick={() => handleClick(previousLink)}
            className="group relative w-full overflow-hidden rounded-xl md:rounded-3xl bg-black focus:outline-none"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={previousImage}
                alt="Previous case"
                fill
                className="object-cover transition-transform cursor-pointer duration-500 group-hover:scale-105"
              />
            </div>
          </button>
        )}

        {/* Next case */}
        {nextImage && (
          <button
            type="button"
            onClick={() => handleClick(nextLink)}
            className="group relative w-full overflow-hidden  rounded-xl md:rounded-3xl bg-black focus:outline-none"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={nextImage}
                alt="Next case"
                fill
                className="object-cover transition-transform cursor-pointer duration-500 group-hover:scale-105"
              />
            </div>
          </button>
        )}
      </div>
    </section>
  );
};

export default DiscoverMore;
