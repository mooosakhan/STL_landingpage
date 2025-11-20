"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";
import ProjectContent from "@/components/pages/works/projectContent";
import pagesData from "@/assets/json/allworks.json";
import { Navigation } from "@/components/layout/Navigation/Navigation";
import { Footer } from "@/components/layout/Footer/Footer";

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

const typedPagesData = pagesData as WorkPage[];

export default function ProjectPage() {
  const { workId } = useParams<{ workId: string }>();
  const router = useRouter();

  const [currentPageData, setCurrentPageData] = useState<WorkPage | null>(null);
  const [dataState, setDataState] = useState<DataState>("LOADING");
  const [nextId, setNextId] = useState<string | null>(null);
  const [previousId, setPreviousId] = useState<string | null>(null);
  const [nextPageData, setNextPageData] = useState<PageData | null>(null);
  const [previousPageData, setPreviousPageData] = useState<PageData | null>(null);

  useEffect(() => {
    if (!workId) {
      setDataState("ERROR");
      return;
    }

    const page = typedPagesData.find((p) => p.id === workId);

    if (page) {
      setCurrentPageData(page);
      setDataState("SUCCESS");

      const currentIndex = typedPagesData.findIndex((p) => p.id === workId);
      const nextIndex = (currentIndex + 1) % typedPagesData.length;
      const previousIndex =
        (currentIndex - 1 + typedPagesData.length) % typedPagesData.length;

      const nextPage = typedPagesData[nextIndex];
      const previousPage = typedPagesData[previousIndex];

      setNextId(nextPage.id);
      setNextPageData({
        link: nextPage.slug,
        image: nextPage.discoverMorePreviewImage,
      });

      setPreviousId(previousPage.id);
      setPreviousPageData({
        link: previousPage.slug,
        image: previousPage.discoverMorePreviewImage,
      });
    } else {
      console.warn(`No project found with id "${workId}"`);
      setDataState("ERROR");
    }
  }, [workId]);

  // While loading, render nothing (no "Loading..." text)
  if (dataState === "LOADING") {
    return null;
  }

  if (dataState === "ERROR" || !currentPageData) {
    return (
      <div className="p-10 text-center">
        <p className="text-xl font-semibold text-red-500">
          Project not found.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg"
          onClick={() => router.push("/works")}
        >
          Back to Works
        </button>
      </div>
    );
  }

  return (
    <>
      <Navigation theme="light" />

      {/* Fade-in for the page content (not the navbar) */}
      <motion.main
        key={currentPageData.id}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <ProjectContent
          pageData={currentPageData}
          nextPage={nextId ?? ""}
          nextPageData={nextPageData}
          previousPage={previousId ?? ""}
          previousPageData={previousPageData ?? undefined}
        />
        <Footer />
      </motion.main>
    </>
  );
}
