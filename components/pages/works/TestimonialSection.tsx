import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  photo: string;
  feedback: string;
}

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const { name, position, company, photo, feedback } = testimonials[currentIndex];

  return (
    <motion.div
      className="bg-white pt-5 rounded-2xl mx-auto "
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start">
        {/* Heading */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold">
            Testimonial
          </h2>
          <p className="text-sm block sm:hidden text-gray-500">
            Hear what our clients say about working with us.
          </p>
        </div>

        {/* Content + Arrows */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="flex flex-col sm:flex-row items-start gap-4"
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src={photo}
                alt={name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover flex-shrink-0"
              />

              <div className="text-left">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 sm:mb-4">
                  {feedback}
                </p>
                <p className="font-semibold text-base sm:text-lg">{name}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {position} at {company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Buttons – left on mobile, right on desktop */}
          <div className="flex justify-start md:justify-end gap-3 mt-2">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 sm:w-11 sm:h-11 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 active:scale-95 transition"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-11 sm:h-11 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 active:scale-95 transition"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialSection;
