interface ApproachSectionProps {
  approachText: string;
  approachMockups: string[];
  approachMockupType: "grid" | "masonry"; // Type for layout
}

const ApproachSection: React.FC<ApproachSectionProps> = ({ approachText, approachMockups, approachMockupType }) => {
  return (
    <div className="py-5">
        <div className="grid md:grid-cols-3 gap-4  md:gap-8 mb-6 md:mb-14 items-start">
          <h2 className="text-2xl md:text-3xl font-semibold">Approach</h2>
          <p className="md:text-gray-900 text-gray-800 col-span-2 leading-relaxed text-sm md:text-lg">
            {approachText}
          </p>
        </div>

      {/* Dynamic Layout: Grid or Masonry */}
      {approachMockupType === "grid" ? (
        // Grid Layout
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {approachMockups.map((mockup, index) => (
            <div key={index} className="w-full">
              <img
                src={mockup}
                alt={`Approach Mockup ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      ) : (
        // Updated Masonry Layout
        <div className="grid gap-3 md:gap-6 grid-cols-2 sm:grid-cols-2 w-full">
          {approachMockups.map((mockup, index) => (
            <div key={index} className={index === 0 ? "col-span-2" : "col-span-1"}>
              <img
                src={mockup}
                alt={`Approach Mockup ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApproachSection;
