'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [visible, setVisible] = useState(true);
    const isLoggedIn = false; // Replace this with actual authentication logic

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const deltaY = currentScrollY - lastScrollY;

            if (deltaY > 0) {
                // Scrolling Down → Hide Navbar
                setVisible(false);
            } else {
                // Scrolling Up → Show Navbar
                setVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
                visible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <nav className="bg-[#fbcfe880] border-pink-300 px-4 lg:px-6 py-3 backdrop-blur-3xl">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="/" className="flex items-center">
                        <img src="/assets/images/maitri.svg" alt="maitri_logo" className="h-10 mb-2"/>
                    </Link>
                    
                    {/* Mobile Menu Button */}
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-pink-800 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-8">
                        <Link href="/" className="text-pink-800 hover:bg-pink-300 font-medium rounded-lg text-sm px-4 py-2">
                            Home
                        </Link>
                        <Link href="/community" className="text-pink-800 hover:bg-pink-300 font-medium rounded-lg text-sm px-4 py-2">
                        Community
                        </Link>
                        <Link href="/opportunities" className="text-pink-800 hover:bg-pink-300 font-medium rounded-lg text-sm px-4 py-2">
                        Opportunities
                        </Link>
                        <Link href="/consultancy" className="text-pink-800 hover:bg-pink-300 font-medium rounded-lg text-sm px-4 py-2">
                            Consultancy
                        </Link>
                        <Link href="/guidance" className="text-pink-800 hover:bg-pink-300 font-medium rounded-lg text-sm px-4 py-2">
                            Guidance
                        </Link>
                    </div>

                    {/* Auth Buttons (Log in & Get Started) OR (Profile & Logout) */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-4">
                        {isLoggedIn ? (
                            <>
                                <Link
                                    href="/profile"
                                    className="text-pink-800 hover:bg-pink-300 focus:ring-4 focus:ring-pink-400 font-medium rounded-lg text-sm px-4 py-2"
                                >
                                    Profile
                                </Link>
                                <button
                                    onClick={() => console.log('Logging out...')}
                                    className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-400 font-medium rounded-lg text-sm px-4 py-2"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="text-pink-800 hover:bg-pink-300 focus:ring-4 focus:ring-pink-400 font-medium rounded-lg text-sm px-4 py-2"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href="/register"
                                    className="text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:ring-pink-400 font-medium rounded-lg text-sm px-4 py-2"
                                >
                                    Get started
                                </Link>
                            </>
                        )}
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
                    <li><Link href="/" className="block py-2 px-4 border-b border-pink-300 hover:bg-pink-300">Home</Link></li>
                    <li><Link href="/opportunities" className="block py-2 px-4 border-b border-pink-300 hover:bg-pink-300">Opportunities</Link></li>
                    <li><Link href="/support" className="block py-2 px-4 border-b border-pink-300 hover:bg-pink-300">Support</Link></li>
                    <li><Link href="/about" className="block py-2 px-4 border-b border-pink-300 hover:bg-pink-300">About Us</Link></li>
                    
                    {/* Mobile Auth Buttons */}
                    {isLoggedIn ? (
                        <>
                            <li><Link href="/profile" className="block py-2 px-4 border-b border-pink-300 hover:bg-pink-300">Profile</Link></li>
                            <li>
                                <button
                                    onClick={() => console.log('Logging out...')}
                                    className="w-full text-left py-2 px-4 border-b border-pink-300 hover:bg-red-300 hover:text-red-800"
                                >
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li><Link href="/login" className="block py-2 px-4 border-b border-pink-300 hover:bg-pink-300">Log in</Link></li>
                            <li><Link href="/register" className="block py-2 px-4 border-b border-pink-300 hover:bg-pink-300">Get started</Link></li>
                        </>
                    )}
                </ul>
            </div>
        </header>
    );
}