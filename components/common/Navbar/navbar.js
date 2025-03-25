"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from "./assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 py-2 md:py-4 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="h-12 md:h-16 relative"
          >
            <Link href="/">
              {/* Use a placeholder logo or your actual logo */}
              <Image
                src={logo}
                alt="Tire Store Service Center Logo"
                width={160}
                height={48}
                className="w-auto h-12 md:h-16"
              />
            </Link>
          </motion.div>

          {/* Navigation Items */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-6 md:space-x-10"
          >
            <div className="relative group">
              <button className="text-white font-medium flex items-center">
                TIRES
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Dropdown menu with animation */}
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                <Link
                  href="https://tirestoretx.com/shop-tires/"
                  target="_blank"
                  className="block px-4 py-2 text-gray-800 hover:bg-purple-100"
                >
                  Shop Tires
                </Link>
                <Link
                  href="https://tirestoretx.com/road-hazard-policy/"
                  target="_blank"
                  className="block px-4 py-2 text-gray-800 hover:bg-purple-100"
                >
                  Road Hazard Policy
                </Link>
              </div>
            </div>
            <Link href="#locations" className="nav-link text-white font-medium">
              LOCATIONS
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
