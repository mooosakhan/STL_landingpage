import React from "react";
import Image from "next/image";


interface Feature {
    id: string;
    title: string;
    description: string;
}

interface FeaturesSectionProps {
    features: Feature[];
    featureImage: string; // Image URL for the right section
    themeColor?: string; // Tailwind class or custom color class
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features, featureImage, themeColor }) => {
    return (
        <div className="flex flex-col items-center py-5">
            {/* Left Section: Challenges and List */}
            <div className="grid grid-cols-3 w-full space-y-6 mb-6 md:mb-14">
                <h2 className="md:text-3xl text-2xl col-span-3 md:col-span-1 font-semibold">Features & Functionality</h2>
                <ul className="space-y-4 md:text-lg text-sm md:col-span-2 col-span-3 md:text-gray-900 text-gray-800">
                    {features.map((feature) => (
                        <li key={feature.id} className="flex items-start">
                            <span className={`mr-3 text-black`}>●</span>
                            {feature.description}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Section: Image and Guest Management */}
            <div className="flex w-full">
                <img
                    src="/images/works/lms/down-banner.png"
                    alt="Feature image"
                    className="rounded-lg w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default FeaturesSection;
