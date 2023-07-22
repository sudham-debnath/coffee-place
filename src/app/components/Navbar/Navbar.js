'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { Slant as Hamburger } from 'hamburger-react';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className='bg-color-second'>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 md:px-16 lg:px-0">
                <Link href='/'>
                    <Image src='/logo.png' alt='Coffee Place' width={80} height={80} />
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="z-20 inline-flex items-center ml-3 text-sm text-white rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false" onClick={() => { setOpen(!isOpen) }}>
                    <Hamburger size={25}></Hamburger>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className=" flex items-center p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 text-white">
                        <Link href='/' className={({ isActive }) => isActive ? 'text-[#38406E] font-medium' : 'text-gray-800'}>
                            <li>Home</li>
                        </Link>
                        <Link href='/about' className={({ isActive }) => isActive ? 'text-[#38406E] font-medium' : 'text-gray-800'}>
                            <li>About</li>
                        </Link>
                        <Link href='/menu' className={({ isActive }) => isActive ? 'text-[#38406E] font-medium' : 'text-gray-800'}>
                            <li>Menu</li>
                        </Link>
                        <Link href='/service' className={({ isActive }) => isActive ? 'text-[#38406E] font-medium' : 'text-gray-800'}>
                            <li>Service</li>
                        </Link>
                        <Link href='/blog' className={({ isActive }) => isActive ? 'text-[#38406E] font-medium' : 'text-gray-800'}>
                            <li>Blog</li>
                        </Link>
                        <Link href='/contact' className={({ isActive }) => isActive ? 'text-[#38406E] font-medium' : 'text-gray-800'}>
                            <li>Contact</li>
                        </Link>
                    </ul>
                </div>
                <div className='hidden md:block'>
                    <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#B99272] rounded-md group hover:text-[#B99272] duration-300">
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                        <span className="relative text-sm">BOOK A TABLE</span>
                    </button>
                </div>
                <ul className={`text-white p-10 pt-3 grid gap-5 w-full text-center bg-[#0E1317] md:hidden absolute duration-500 z-10 ${isOpen ? 'right-0 top-[70px]' : 'right-0 -top-96'}`}>
                    <Link href='/' className={({ isActive }) => isActive ? 'text-[#38406E] font-medium' : 'text-white'}>
                        <li>Home</li>
                    </Link>
                    <Link href='/about' className={({ isActive }) => isActive ? 'text-[#38406E] font-medium' : 'text-white'}>
                        <li>About</li>
                    </Link>
                    <Link href='/menu' className={({ isActive }) => isActive ? 'text-[#38406E] font-medium' : 'text-white'}>
                        <li>Menu</li>
                    </Link>
                    <Link href='/service' className={({ isActive }) => isActive ? 'text-[#38406E] font-medium' : 'text-white'}>
                        <li>Service</li>
                    </Link>
                    <Link href='/blog' className={({ isActive }) => isActive ? 'text-[#38406E] font-medium' : 'text-white'}>
                        <li>Blog</li>
                    </Link>
                    <Link href='/contact' className={({ isActive }) => isActive ? 'text-[#38406E] font-medium' : 'text-white'}>
                        <li>Contact</li>
                    </Link>
                    <Link href='/'>
                        <div>
                            <button className="rounded-md relative inline-flex items-center justify-center px-8 py-4 overflow-hidden tracking-tighter text-white bg-[#B99272] group hover:text-[#B99272] duration-300">
                                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                                <span className="absolute inset-0 w-full h-full -mt-1 opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                                <span className="relative text-sm">BOOK A TABLE</span>
                            </button>
                        </div>
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;