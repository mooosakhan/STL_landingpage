"use client";

import { useEffect, useRef, useState } from "react";
import data from "@/assets/json/allworks.json";
import { Navigation } from "@/components/layout/Navigation/Navigation";
import { PageHeader } from "@/components/common/Header/PageHeader";
import PortfolioSection from "@/components/pages/works/ProjectsFilter";
import { FooterCTA } from "@/components/common/FooterCTA/FooterCTA";
import { FooterSection } from "@/components/sections/footer/footer";
import { Footer } from "@/components/layout/Footer/Footer";

interface Work {
  id: string;
  slug?: string;
  title: string;
  year?: string;
  showoffImage?: string;
  previewImage?: string;
  dataContent?: string;
  task?: string[];
}

const WorksGrid = () => {

  return (
    <>
      <Navigation theme="light" />
      <section className="px-6 md:px-16 space-y-5">
        <PageHeader
          title="Building Better Products, One Project at a Time"
          subtitle="Browse the digital experiences we’ve created — each shaped with intent, innovation, and a commitment to delivering solutions that truly elevate how people interact with technology."
        />
        <PortfolioSection data={data} />
        <FooterCTA
          title="Ready to Elevate Your Digital Presence?"
          subtitle="Let's collaborate to create impactful digital experiences that resonate with your audience and drive success."
        />
      </section>
      <Footer />
    </>
  );
};

export default WorksGrid;
