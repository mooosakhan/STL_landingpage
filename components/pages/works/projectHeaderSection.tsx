interface ProjectHeaderSectionProps {
    title: string;
    subtitle?: string;
    services?: string[];
    duration?: string;
    industry?: string;
    logo?: string;
    tagline: string;
    themeColor?: string;
}

export function ProjectHeaderSection({
    tagline,
    title,
    services = [],
    duration,
    industry,
    logo,
    themeColor,
}: ProjectHeaderSectionProps) {
    return (
        <section className="py-5 font-inter bg-white rounded-lg flex flex-col gap-6">
            <div className="md:leading-15 ">
                <h2 className="text-xl lg:text-[40px] font-medium">{tagline}</h2>
                {title && <p className="text-xl lg:text-[40px] italic  md:font-semibold">{title}</p>}
            </div>

            <div className="flex flex-wrap gap-10 items-center">
                <div className="flex flex-col items-start justify-center gap-4">
                    <h1 className="md:text-xl text-lg text-gray-400">Services</h1>
                    <div className="flex items-center justify-start md:justify-center flex-wrap gap-3">
                        {services.map((s, idx) => (
                            <span
                                key={idx}
                                className="text-sm md:text-lg px-3 py-1 rounded-md bg-[var(--themeColor)]"
                                style={{ "--themeColor": themeColor } as React.CSSProperties}
                            >
                                <div>
                                    {s}
                                </div>
                            </span>
                        ))}
                    </div>

                </div>
                <div className="flex flex-col items-start justify-center gap-4">
                    <h1 className="md:text-xl text-lg  text-gray-400">Duration</h1>
                    <div className="flex items-center justify-center gap-3">
                        {duration && (
                            <span className="md:text-xl text-md">
                              {duration}
                            </span>
                        )}

                    </div>

                </div>
                <div className="flex flex-col items-start justify-center gap-4">
                    <h1 className="md:text-xl text-lg  text-gray-400">Industry</h1>
                    <div className="flex items-center justify-center gap-3">
                        {industry && (
                            <span className="md:text-xl text-md">
                                {industry}
                            </span>
                        )}

                    </div>

                </div>

            </div>

            {logo && (
                <div className={`mt-6 md:h-65 h-26 flex justify-center items-center p-4 rounded-xl bg-[var(--themeColor)]`} style={{ "--themeColor": themeColor } as React.CSSProperties }>
                    <img src={logo} alt="Company Logo" className="h-10 md:h-24 object-cover" />
                </div>
            )}
        </section>
    );
}
