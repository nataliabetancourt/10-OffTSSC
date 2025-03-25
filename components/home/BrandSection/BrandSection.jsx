"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ImageSlider } from "./BrandsSlide";
import TireFinderSection from "./TireFinder";
import initTireConnect from "./TireConnectScript";

export function BrandSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Initialize TireConnect only once when the component mounts
  useEffect(() => {
    // Small delay to ensure the container is rendered
    const timer = setTimeout(() => {
      initTireConnect();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Tire Finder Section */}
      <div className="relative">
        <TireFinderSection />
      </div>

      {/* Brands Slider Section */}
      <div className="bg-white">
        <motion.section
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col max-w-[1440px] gap-8 pb-10 items-center text-center mx-auto"
        >
          <div className="mt-4 w-full">
            <ImageSlider />
          </div>
        </motion.section>
      </div>
    </div>
  );
}
