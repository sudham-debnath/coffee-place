'use client'

import React, { useEffect } from 'react';
import { FaUtensils, FaCoffee, FaWineGlassAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <section className='grid md:grid-cols-3 gap-6 mt-28'>
            <div className='bg-cover bg-center h-80' style={{ backgroundImage: `url(${'/others/service1.jpg'})` }} data-aos="fade-up" data-aos-delay="100">
                <div className='m-12 border flex justify-center items-center border-[#B99272] text-center h-56'>
                    <div>
                        <FaUtensils className='mx-auto text-5xl' />
                        <p className='text-lg mt-3'>Restaurant Menu</p>
                    </div>
                </div>
            </div>
            <div className='bg-cover bg-center h-80' style={{ backgroundImage: `url(${'/others/service2.jpg'})` }} data-aos="fade-up" data-aos-delay="200">
                <div className='m-12 border flex justify-center items-center border-[#B99272] text-center h-56'>
                    <div>
                        <FaCoffee className='mx-auto text-5xl' />
                        <p className='text-lg mt-3'>Coffee Menu</p>
                    </div>
                </div>
            </div>
            <div className='bg-cover bg-center h-80' style={{ backgroundImage: `url(${'/others/service3.jpg'})` }} data-aos="fade-up" data-aos-delay="300">
                <div className='m-12 border flex justify-center items-center border-[#B99272] text-center h-56'>
                    <div>
                        <FaWineGlassAlt className='mx-auto text-5xl' />
                        <p className='text-lg mt-3'>Food Services</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;