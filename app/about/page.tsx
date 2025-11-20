"use client";

import { Navigation } from "@/components/layout/Navigation/Navigation";
import { Footer } from "@/components/layout/Footer/Footer";
import { AboutMarquee } from "@/components/pages/about/AboutMarquee";
import { OfficeGallery } from "@/components/pages/about/OfficeGallery";
import { FooterCTA } from "@/components/common/FooterCTA/FooterCTA";
import { StepByStep } from "@/components/pages/about/StepSection";
import { PageHeader } from "@/components/common/Header/PageHeader";

export default function AboutPage() {
  return (
    <>
      <Navigation theme="light" />

      <div className="px-6 md:px-16 space-y-12 md:space-y-20">
        <PageHeader
          title="Shaping Better Digital Experiences for Everyone"
          subtitle=" Turning ideas into refined digital products that help people connect, work,
        and grow — built through a careful blend of research, creativity, and
        technology to ensure every user interaction truly matters."
        />

        <AboutMarquee />

        <OfficeGallery />

        <StepByStep />

        <FooterCTA 
          title="Ready to Elevate Your Digital Presence?"
          subtitle="Contact us today to discuss how we can bring your vision to life with innovative design and cutting-edge technology."
        />
      </div>

      <Footer />
    </>
  );
}
