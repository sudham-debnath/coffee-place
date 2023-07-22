import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";

const BlogCart = (blog) => {
    const { idMeal, strMeal, strCategory, strInstructions, strMealThumb } = blog;

    return (
        <div data-aos="fade-up" className='bg-black'>
            <Image src={strMealThumb} alt='blog image' className='w-full h-60 md:h-96 object-cover object-center' width={200} height={200} />
            <div className='p-6 md:p-10 grid gap-4'>
                <p className='flex items-center gap-2 text-gray-400'><FaRegCalendarAlt /> 22 July 2023</p>
                <h2 className='text-2xl hover:text-[#B99272] duration-300 cursor-pointer'>{strMeal}</h2>
                <p className='text-gray-400'>{strInstructions.slice(0, 180)}....</p>
                <div>
                    <Link href={`blog/${idMeal}`}>
                        <button href="" class="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-md group">
                            <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                            <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                            <span class="relative w-full text-left text-gray-400 transition-colors duration-200 ease-in-out group-hover:text-gray-900 text-sm">READ MORE</span>
                            <span class="absolute inset-0 border-2 border-gray-400 hover:border-white rounded-md duration-200"></span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCart;