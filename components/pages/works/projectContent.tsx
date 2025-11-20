import { ProjectHeaderSection } from "./projectHeaderSection";
import { ProjectOverviewSection } from "./ProjectOverviewSection";
import ChallengeSection from "./ChallengeSection";
import ApproachSection from "./ApproachSection";
import FeaturesSection from "./FeaturesSection";
import TestimonialSection from "./TestimonialSection";
import DiscoverMore from "./DiscoverMoreSection";

interface ProjectContentProps {
  pageData: {
    tagline: string;
    title: string;
    services: string[];
    duration: {
      month: number;
      week: number;
    };
    industries: string[];
    logo: string;
    themeColor: string;
    overview: string;
    overviewImage: string;
    challenges: { id: string; description: string }[];
    challengesMockups: string[];
    approach: string;
    approachMockups: string[];
    approachMockupType: "grid" | "masonry";
    features : { id: string; title: string; description:string }[];
    downBanner : string[];
    testimonials: { id: string; name: string; position: string; company: string; photo: string; feedback: string }[]
  };
  nextPage: string;
  nextPageData: any;
  previousPage: string;
  previousPageData: any;
}

export default function ProjectContent({ pageData, nextPage, nextPageData, previousPage, previousPageData }: ProjectContentProps) {
  return (
    <div className="px-6 md:px-16 md:space-y-10 space-y-5">
      {/* HEADER */}
      <ProjectHeaderSection
        tagline={pageData.tagline}
        title={pageData.title}
        services={pageData.services}
        duration={`${pageData.duration?.month} month ${pageData.duration?.week} weeks`}
        industry={pageData.industries?.[0]} // Assuming industries array is not empty
        logo={pageData.logo}
        themeColor={pageData.themeColor}
      />

      {/* OVERVIEW */}
      <ProjectOverviewSection
        description={pageData.overview}
        image={pageData.overviewImage}
        themeColor={pageData.themeColor}
      />

      {/* CHALLENGE SECTION */}
      <ChallengeSection
        challenges={pageData.challenges}
        challengeImage={pageData.challengesMockups} // Passing mockup images correctly
        themeColor={pageData.themeColor}
      />

      {/* APPROACH SECTION */}
      <ApproachSection
        approachText={pageData.approach}
        approachMockups={pageData.approachMockups}
        approachMockupType={pageData.approachMockupType}
      />

      <FeaturesSection
       features={pageData.features}
       featureImage={pageData.downBanner}
       
      />

       <TestimonialSection testimonials={pageData.testimonials} />

       <DiscoverMore
        nextPage={nextPage}
        nextPageData={nextPageData}
        previousPage={previousPage}
        previousPageData={previousPageData}
       />
    </div>
  );
}
