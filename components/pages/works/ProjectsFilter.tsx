"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PortfolioSection({ data }: { data: any[] }) {
    const categories = data
        ? ["All", ...Array.from(new Set(data.map((item) => item.type)))]
        : [];
    const [active, setActive] = useState("All");
    const router = useRouter();
    const filtered =
        active === "All" ? data : data.filter((item) => item.type === active);

    return (
        <div className="w-full space-y-5 md:space-y-5">
            {/* Filter Tabs */}
            <div className="flex items-center gap-8 text-sm md:text-base ">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={
                            active === cat
                                ? "text-[#4D143D] font-medium hover:cursor-pointer"
                                : "text-gray-400 hover:text-gray-600 hover:cursor-pointer"
                        }
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="space-y-5">
                {filtered.map((project, index) => (
                    <div key={index}>
                        <div onClick={() => router.push(`/works/${project.id}`)} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center w-full py-5 md:py-10 hover:cursor-pointer"
                            >
                            <h3 className="text-2xl font-semibold capitalize block md:hidden">{project.id}</h3>
                            <div className="flex justify-center">
                                <div className="w-full max-w-md rounded-2xl overflow-hidden">
                                    <Image
                                        src={project.showcaseImage1}
                                        alt={project.title}
                                        width={600}
                                        height={450}
                                        className="w-full h-auto rounded-2xl object-cover"
                                    />
                                </div>
                            </div>
                            <div className="text-center flex flex-col items-center px-4 md:px-8">
                                <h3 className="text-2xl font-semibold mb-3 capitalize hidden md:block">{project.id}</h3>

                                <p className="text-gray-600 leading-relaxed max-w-md mb-4">
                                    {project.showcaseText}
                                </p>
                                <div className="flex flex-wrap justify-center gap-3 mt-2">
                                    {project.services.slice(0, 3).map((service: string) => (
                                        <span
                                            key={service}
                                            className="border border-gray-300 px-4 py-1 rounded-full text-sm text-gray-600"
                                        >
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div className="w-full max-w-md rounded-2xl overflow-hidden">
                                    <Image
                                        src={project.showcaseImage2}
                                        alt={project.title}
                                        width={600}
                                        height={450}
                                        className="w-full h-auto rounded-2xl object-cover"
                                    />
                                </div>
                            </div>
                        </div></div>
                ))}
            </div>
        </div>
    );
}
