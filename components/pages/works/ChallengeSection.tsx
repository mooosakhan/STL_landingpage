import React from "react";
import Image from "next/image";


interface Challenge {
    id: string;
    title: string;
    description: string;
}

interface ChallengeSectionProps {
    challenges: Challenge[] ;
    challengeImage: string[]; 
}

const ChallengeSection: React.FC<ChallengeSectionProps> = ({ challenges, challengeImage }) => {
    return (
        <div className="flex flex-col items-center py-5">
            {/* Left Section: Challenges and List */}
            <div className="grid grid-cols-3 w-full space-y-6 mb-6 md:mb-14">
                <h2 className="md:text-3xl text-2xl col-span-3 md:col-span-1 font-semibold">Challenge</h2>
                <ul className="space-y-4 md:text-lg text-sm md:col-span-2 col-span-3 md:text-gray-900 text-gray-800">
                    {challenges.map((challenge) => (
                        <li key={challenge.id} className="flex items-start">
                            <span className={`mr-3 text-black`}>●</span>
                            {challenge.description}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Section: Image and Guest Management */}
            <div className="grid grid-cols-5 gap-6 w-full">
               <Image 
                src={challengeImage[0]}
                alt="Challenge mockup1"
                width={600}
                height={400}
                className="rounded-lg w-full h-full col-span-5 md:col-span-3"
               />
               <Image
                src={challengeImage[1]}
                alt="Challenge mockup2"
                width={600}
                height={400}
                className="rounded-lg w-full h-full col-span-5 md:col-span-2"
               />
            </div>
        </div>
    );
};

export default ChallengeSection;
