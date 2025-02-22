"use client";

import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-pink-200 to-white text-gray-800 py-10 px-6 md:px-12 lg:px-20 shadow-xl overflow-hidden mt-14">
      {/* Curved Wave Separator */}


      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* Brand & Description */}
        <div className="flex flex-col gap-3">
            <div className="up">
                <img src="/assets/images/maitri.svg" alt="maitri_logo" className="h-[3.5rem]"/>
            </div>
            <div className="lowerpara">
                <p className="mt-2 text-gray-600 w-3/4">
                    Your Safe Space, Where Support Meets Understanding.
                </p>
            </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-pink-600 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link href="/" className="hover:text-pink-500 transition-transform transform hover:scale-105">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-pink-500 transition-transform transform hover:scale-105">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-pink-500 transition-transform transform hover:scale-105">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pink-500 transition-transform transform hover:scale-105">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-pink-600 mb-3">Stay Updated</h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
              Subscribe
            </button>
          </form>
        </div>
        
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mt-8 relative z-10">
        <FaFacebook className="text-2xl text-pink-500 hover:text-pink-700 transition-transform transform hover:scale-110 cursor-pointer" />
        <FaTwitter className="text-2xl text-pink-500 hover:text-pink-700 transition-transform transform hover:scale-110 cursor-pointer" />
        <FaInstagram className="text-2xl text-pink-500 hover:text-pink-700 transition-transform transform hover:scale-110 cursor-pointer" />
        <FaLinkedin className="text-2xl text-pink-500 hover:text-pink-700 transition-transform transform hover:scale-110 cursor-pointer" />
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-600 mt-6 relative z-10">© 2025 Maitri. All rights reserved.</p>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 240" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,120 C300,240 900,0 1200,120 L1200,240 L0,240 Z" fill="white"></path>
        </svg>
      </div>

    </footer>
  );
}