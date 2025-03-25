"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "./assets/heroImg.png";
import carfaxLogo from "./assets/carfax-logo.png";
import foxMascot from "./assets/fox-mascot.png";

export default function LandingSection() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const buttonHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <div className="relative w-full  bg-gray-900 overflow-hidden">
        {/* Dark overlay for image */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Background Image - Using Next.js Image component */}
        <div className="absolute inset-0">
          <Image
            src={heroImg}
            alt="Tire Store Background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ filter: "brightness(0.7)" }}
          />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-52 pb-16 md:pt-64 md:pb-24 lg:pt-52 lg:pb-32 relative z-20">
          {/* Main Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center max-w-5xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-white text-xl md:text-2xl mb-4 font-medium"
            >
              WELCOME TO TIRE STORE SERVICE CENTER
            </motion.h2>

            <motion.h1
              variants={fadeInUp}
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-6 tracking-tight"
            >
              GET 10% OFF YOUR FIRST VISIT
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-white text-lg md:text-xl mb-10"
            >
              And we'll become the place to go for all your tire needs!
            </motion.p>

            <motion.div variants={fadeInUp}>
              <motion.button
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                className="bg-violet-600 hover:bg-violet-700 text-white font-medium py-3 px-8 rounded-md shadow-lg transition-all duration-300"
              >
                GET 10% OFF MY FIRST VISIT
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Banner with fox at the bottom using Next.js Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative w-full py-3 md:py-4 overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #20033E 0%, #7e22ce 50%, #20033E 100%)",
          }}
        ></div>
        <div className="container mx-auto px-8 w-auto flex flex-col md:flex-row justify-between items-center relative">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="flex text-yellow-400 mr-3">
              {/* Star SVGs */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
            </div>

            {/* Using Next.js Image with direct path */}
            <Image
              src={carfaxLogo}
              alt="CARFAX Logo"
              width={120}
              height={32}
              className="h-6 md:h-8 w-auto"
            />
          </div>

          <h3 className="text-white text-xl text-center md:text-2xl lg:text-3xl font-bold mb-4 md:mb-0">
            2024 TOP RATED SERVICE CENTER
          </h3>

          {/* Fox positioned to extend below */}
          <div className="relative h-16 md:h-20 flex items-start">
            <div style={{ bottom: "-24px" }}>
              {/* Using Next.js Image with direct path */}
              <Image
                src={foxMascot}
                alt="Fox Mascot"
                width={120}
                height={120}
                className="h-24 md:h-28 w-auto max-w-none"
              />
              {/*<img
                src={foxMascot}
                alt="Fox Mascot"
                className="h-24 md:h-28 w-auto"
              />*/}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
