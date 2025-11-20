import React, { ReactNode } from "react";

type SectionHeaderProps = {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  /** 
   * layout = "split" → title left, description right on desktop
   * layout = "stacked" → title above description
   */
  layout?: "split" | "stacked";
};

export function SectionHeader({
  title,
  description,
  className = "",
  layout = "split",
}: SectionHeaderProps) {
  const baseClasses = "flex flex-col gap-4";
  const layoutClasses =
    layout === "split"
      ? "md:flex-row md:items-start md:justify-between"
      : "";

  return (
    <div className={`mx-auto ${className}`}>
      <div className={`${baseClasses} ${layoutClasses}`}>
        <h2 className="text-2xl md:text-3xl lg:text-[28px] font-medium leading-snug max-w-2xl text-zinc-900">
          {title}
        </h2>

        {description && (
          <p className="hidden md:block text-sm md:text-base text-zinc-500 max-w-md">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
