'use client'

import React, { useEffect } from 'react';
import { FaRegCalendarAlt, FaRegComments } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ThreeBlog = () => {
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <>
            <div className='text-center text-white' data-aos="zoom-in">
                <p className='text-color'>GET EVERY SINGLE UPDATE</p>
                <h2 className='text-4xl my-5 font-semibold'>Read Some Latest Blog & News</h2>
            </div>
            <div className='grid md:grid-cols-3 gap-8 mt-16'>
                <div data-aos="flip-left" data-aos-delay="100" style={{ backgroundImage: 'url(https://kaffen-reactjs.netlify.app/images/latest_blog1.jpg)' }} className='bg-cover bg-center bg-no-repeat text-white h-96 relative'>
                    <div className='absolute bottom-0 bg-gradient-to-t from-gray-900 px-6 pb-6 pt-36'>
                        <h3 className='text-xl'>SWR React Hooks With Next Increm Ental Static Regeneration</h3>
                        <ul className='flex items-center gap-4 mt-3'>
                            <li className='flex items-center gap-1 text-gray-300'><FaRegCalendarAlt /> <span>3 July 2023</span></li>
                            <li className='flex items-center gap-1 text-gray-300'><FaRegComments /> <span>Comments(7)</span></li>
                        </ul>
                    </div>
                </div>
                <div data-aos="flip-left" data-aos-delay="200" style={{ backgroundImage: 'url(https://kaffen-reactjs.netlify.app/images/latest_blog2.jpg)' }} className='bg-cover bg-center bg-no-repeat text-white h-96 relative'>
                    <div className='absolute bottom-0 bg-gradient-to-t from-gray-900 px-6 pb-6 pt-36'>
                        <h3 className='text-xl'>Decisions For Building Flexible Components DevTools Browser</h3>
                        <ul className='flex items-center gap-4 mt-3'>
                            <li className='flex items-center gap-1 text-gray-300'><FaRegCalendarAlt /> <span>3 July 2023</span></li>
                            <li className='flex items-center gap-1 text-gray-300'><FaRegComments /> <span>Comments(7)</span></li>
                        </ul>
                    </div>
                </div>
                <div data-aos="flip-left" data-aos-delay="300" style={{ backgroundImage: 'url(https://kaffen-reactjs.netlify.app/images/latest_blog3.jpg)' }} className='bg-cover bg-center bg-no-repeat text-white h-96 relative'>
                    <div className='absolute bottom-0 bg-gradient-to-t from-gray-900 px-6 pb-6 pt-36'>
                        <h3 className='text-xl'>SWR React Hooks With Next Increm Ental Static Regeneration</h3>
                        <ul className='flex items-center gap-4 mt-3'>
                            <li className='flex items-center gap-1 text-gray-300'><FaRegCalendarAlt /> <span>3 July 2023</span></li>
                            <li className='flex items-center gap-1 text-gray-300'><FaRegComments /> <span>Comments(7)</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex justify-center' data-aos="fade-up">
                <button class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#B99272] rounded-md group hover:text-[#B99272] duration-300 mt-14">
                    <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                    <span class="relative text-sm uppercase">Explore More</span>
                </button>
            </div>
        </>
    );
};

export default ThreeBlog;