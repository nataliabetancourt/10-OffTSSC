// TireFinderSection.jsx
import React from "react";

// This component doesn't use any React state or lifecycle methods
// It simply renders a placeholder div that TireConnect will fill
const TireFinderSection = () => {
  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-8 h-1 bg-violet-600 mr-3"></div>
            <p className="mx-2 text-gray-700 font-medium tracking-wide">
              OUR TIRES
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 lg:mb-0">
              Find the Right Tire
              <br />
              For You
            </h2>
            <p className="text-gray-600 text-lg">
              Why not find the right tire for you before stopping by! Use our
              Tire Finder by providing your information and seeing what options
              pop up.
            </p>
          </div>
        </div>

        {/* Static TireConnect Container */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 overflow-visible">
          {/* This is just a placeholder div that will be filled by the script */}
          <div id="tireconnect" className="w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default TireFinderSection;
