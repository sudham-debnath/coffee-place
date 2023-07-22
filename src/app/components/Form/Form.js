'use client'

import { useEffect } from "react";
import { FaRegUser, FaEnvelope, FaPhoneAlt, FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Form = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <form className='bg-black px-12 py-16 border-t-4 border-[#B99272] md:w-4/6 mx-auto'>
            <div className='text-center text-white mb-16' data-aos="zoom-in">
                <p className='text-color'>CHOOSE BEST OF</p>
                <h2 className='text-4xl my-5 font-semibold'>Coffee Place Menu</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="grid gap-6">
                    <div className="text-white relative" data-aos="fade-up" data-aos-delay="100">
                        <input type="text" name="name" id="name" placeholder='Full Name' className=' border border-gray-600 p-3 bg-black text rounded-md w-full' />
                        <FaRegUser className="absolute right-3 top-4" size={20} />
                    </div>
                    <div className="text-white relative" data-aos="fade-up" data-aos-delay="200">
                        <input type="number" name="phone" id="phone" placeholder='Phone Number' className=' border border-gray-600 p-3 bg-black text rounded-md w-full' />
                        <FaPhoneAlt className="absolute right-3 top-4" size={20} />
                    </div>
                    <div className="text-white relative" data-aos="fade-up" data-aos-delay="300">
                        <input type="date" name="phone" id="phone" placeholder='Phone Number' className=' border border-gray-600 p-3 bg-black text rounded-md w-full' />
                        <FaRegCalendarAlt className="absolute right-3 top-4" size={20} />
                    </div>
                </div>
                <div className="grid gap-6">
                    <div className="text-white relative" data-aos="fade-up" data-aos-delay="400">
                        <input type="email" name="email" id="email" placeholder='Email Address' className=' border border-gray-600 p-3 bg-black text rounded-md w-full' />
                        <FaEnvelope className="absolute right-3 top-4" size={20} />
                    </div>
                    <div className="text-white" data-aos="fade-up" data-aos-delay="500">
                        <select name="" id="" className="border border-gray-600 p-3 bg-black text rounded-md w-full">
                            <option value="person_1">Person 1</option>
                            <option value="person_2">Person 2</option>
                            <option value="person_4">Person 4</option>
                            <option value="person_6">Person 6</option>
                        </select>
                    </div>
                    <div className="text-white relative" data-aos="fade-up" data-aos-delay="600">
                        <input type="time" name="time" id="time" placeholder='Time' className=' border border-gray-600 p-3 bg-black text rounded-md w-full' />
                        <FaRegClock className="absolute right-3 top-4" size={20} />
                    </div>
                </div>
            </div>
            <div className="text-center mt-6">
                <button type="submit" class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#B99272] rounded-md group hover:text-[#B99272] duration-300" data-aos="fade-up">
                    <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                    <span class="relative text-sm uppercase">Booking Table</span>
                </button>
            </div>
        </form>
    );
};

export default Form;