"use client";

import React from "react";

interface PageHeaderProps {
    title: string;
    subtitle: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
    return (
        <div className="py-5 space-y-6 md:space-y-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl max-w-4xl leading-snug">
                {title}
            </h1>

            <p className="text-base md:text-lg text-neutral-500 max-w-5xl">
                {subtitle}
            </p>
        </div>
    );
};
