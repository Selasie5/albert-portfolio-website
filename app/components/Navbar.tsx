"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {

    const navbarLinks = [
        { id: "01", tag: "About Me", href: "/#about-me" },
        { id: "02", tag: "Research & Publications", href: "/#research" },
        { id: "04", tag: "Conference Presentations", href: "/#experience" },
        { id: "05", tag: "Contact Me", href: "/#contact" },
    ];

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className='bg-white relative h-[12vh] flex justify-between items-center px-10 md:px-20'>
                <div>
                    <Link href="/">
                        <span className='font-Great text-black font-bold text-4xl cursor-pointer'>
                            Albert
                        </span>
                    </Link>
                </div>
                <div>
                    <button
                        aria-label="Toggle menu"
                        onClick={toggleMenu}
                        className="focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-7 h-7"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Animate menu with transform and opacity */}
            <div
                className={`absolute top-0 left-0 h-screen w-full flex flex-col justify-center gap-10 bg-white z-50 transition-transform duration-300 ease-in-out 
                ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
            >
                <div className='flex justify-end items-center px-10 hover:cursor group' onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-10 text-gray-500 hover:text-primary hover:cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <div className='flex flex-col justify-center items-center w-full space-y-14 px-10'>
                    {navbarLinks.map((link) => (
                        <div key={link.id} className='w-full text-center group'>
                            <Link href={link.href} legacyBehavior >
                                <a className="text-2xl md:text-3xl font-Poppins text-gray-500 font-[400] flex justify-between items-center transition-colors duration-200 group-hover:text-black" onClick={()=>setIsOpen(false)}>
                                    {link.tag}
                                    <span className='text-xl'>{link.id}</span>
                                </a>
                            </Link>
                            <hr className='bg-gray-200 h-0.5 w-full mt-2 group-hover:bg-black' />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;
