'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky z-50 top-0 poly">
            <nav className="bg-[#fbcfe880] border-pink-300 px-4 lg:px-6 py-3 backdrop-blur-3xl">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl tracking-wider">
                    <Link href="/" className="flex items-center">
                        <img src="/assets/images/maitri.svg" alt="maitri_logo" className="h-10 mb-2"/>
                    </Link>
                    
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-[#FF00BF] focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                    
                    <div className="hidden lg:flex lg:items-center lg:space-x-8">
                        <Link
                            href="/"
                            className="text-[#FF00BF] hover:bg-[#FFD2EA] font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                        >
                            Home
                        </Link>
                        <Link
                            href="/community"
                            className="text-[#FF00BF] hover:bg-[#FFD2EA] font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                        >
                           Commnunity
                        </Link>
                        <Link
                            href="/support"
                            className="text-[#FF00BF] hover:bg-[#FFD2EA] font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                        >
                            Opportunities
                        </Link>
                        <Link
                            href="/support"
                            className="text-[#FF00BF] hover:bg-[#FFD2EA] font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                        >
                            Consultancy
                        </Link>
                        <Link
                            href="/about"
                            className="text-[#FF00BF] hover:bg-[#FFD2EA] font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                        >
                            Guidance
                        </Link>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:space-x-4">
        <Link
            href="/login"
            className="text-[#FF00BF] hover:bg-[#FFD2EA] focus:ring-4 focus:ring-pink-400 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
        >
            Log in
        </Link>
        <Link
            href="#"
            className="text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:ring-pink-400 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
        >
            Get started
        </Link>
    </div>
</div>
</nav>

            {/* Sidebar Menu for Mobile */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-pink-200 shadow-md transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform lg:hidden`}>
                <div className="flex justify-end p-4">
                    <button onClick={() => setIsOpen(false)} className="text-pink-800 focus:outline-none">
                        <X size={28} />
                    </button>
                </div>
                <ul className="flex flex-col mt-4 font-medium">
                    <li>
                        <Link
                            href="/"
                            className="block py-2 px-4 border-b border-pink-300 hover:bg-pink-300 hover:text-pink-600"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/opportunities"
                            className="block py-2 px-4 border-b border-pink-300 hover:bg-pink-300 hover:text-pink-600"
                        >
                            Opportunities
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/support"
                            className="block py-2 px-4 border-b border-pink-300 hover:bg-pink-300 hover:text-pink-600"
                        >
                            Support
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="block py-2 px-4 border-b border-pink-300 hover:bg-pink-300 hover:text-pink-600"
                        >
                            About Us
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}