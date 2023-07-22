"use client"
import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import BlogCart from '../components/BlogCart/BlogCart';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaSearch } from "react-icons/fa";

const Blog = () => {
    const [mainData, setMainData] = useState([]);
    const [showMore, setShowMore] = useState(true);

    const fetchData = async () => {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');
        const data = await res.json();
        const meals = data.meals || [];
        setMainData(meals.slice(0, 3));
        setShowMore(meals.length > 3);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        AOS.init();
    }, []);

    const loadMoreData = async () => {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');
        const data = await res.json();
        const meals = data.meals || [];
        const currentLength = mainData.length;
        const newData = mainData.concat(meals.slice(currentLength, currentLength + 3));
        setMainData(newData);
        setShowMore(newData.length < meals.length);
    };

    return (
        <>
            <Header title={'Blog'}></Header>
            <main className='text-white bg-color-second'>
                <section className='px-5 py-16 md:px-32 md:py-28 grid md:grid-cols-3 gap-16'>
                    <div className='md:col-span-2 grid gap-8'>
                        {
                            mainData.map(blog => <BlogCart key={blog.idMeal} {...blog}></BlogCart>)
                        }
                        {showMore && <div className='text-center'>
                            <button onClick={loadMoreData} class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-color rounded-md group hover:text-[#B99272] duration-300" data-aos="zoom-in">
                                <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                                <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                                <span class="relative text-sm uppercase">Load More</span>
                            </button>
                        </div>}
                    </div>
                    <div>
                        <div className='relative' data-aos="zoom-in-up" data-aos-delay="100">
                            <input className='border border-gray-700 bg-transparent p-4 w-full rounded-md' placeholder='Search' type="text" name="search" id="search" />
                            <span className='absolute top-5 right-5 cursor-pointer'><FaSearch size={18} /></span>
                        </div>
                        <div className='border border-gray-700 p-8 mt-8 rounded-md' data-aos="zoom-in-up" data-aos-delay="200">
                            <h3 className='text-color text-2xl'>Categories</h3>
                            <dl className='mt-4 grid gap-3'>
                                <dd className='hover:text-[#B99272] cursor-pointer duration-300'>Sea Food (1)</dd>
                                <dd className='hover:text-[#B99272] cursor-pointer duration-300'>Coffee (2)</dd>
                                <dd className='hover:text-[#B99272] cursor-pointer duration-300'>Recipes (4)</dd>
                                <dd className='hover:text-[#B99272] cursor-pointer duration-300'>Guides (5)</dd>
                            </dl>
                        </div>
                        <div className='border border-gray-700 p-8 mt-8 rounded-md' data-aos="zoom-in-up" data-aos-delay="300">
                            <h3 className='text-color text-2xl'>Recent Posts</h3>
                            <dl className='mt-4 grid gap-3'>
                                <dd className='hover:text-[#B99272] cursor-pointer duration-300'>For most people, moderate coffee consumption</dd>
                                <dd className='hover:text-[#B99272] cursor-pointer duration-300'>Coffee makes you poop during the day because</dd>
                                <dd className='hover:text-[#B99272] cursor-pointer duration-300'>Coffee with added milk provides all</dd>
                            </dl>
                        </div>
                        <div className='border border-gray-700 p-8 mt-8 rounded-md' data-aos="zoom-in-up" data-aos-delay="400">
                            <h3 className='text-color text-2xl'>Tag Cloud</h3>
                            <div className='flex flex-wrap gap-2 mt-4'>
                                <span className='bg-gray-800 py-2 px-3 rounded-md text-gray-200 cursor-pointer hover:bg-[#B99272] hover:text-white duration-300'>coffee</span>
                                <span className='bg-gray-800 py-2 px-3 rounded-md text-gray-200 cursor-pointer hover:bg-[#B99272] hover:text-white duration-300'>hot coffee</span>
                                <span className='bg-gray-800 py-2 px-3 rounded-md text-gray-200 cursor-pointer hover:bg-[#B99272] hover:text-white duration-300'>cold coffee</span>
                                <span className='bg-gray-800 py-2 px-3 rounded-md text-gray-200 cursor-pointer hover:bg-[#B99272] hover:text-white duration-300'>lati</span>
                                <span className='bg-gray-800 py-2 px-3 rounded-md text-gray-200 cursor-pointer hover:bg-[#B99272] hover:text-white duration-300'>cappuccino</span>
                                <span className='bg-gray-800 py-2 px-3 rounded-md text-gray-200 cursor-pointer hover:bg-[#B99272] hover:text-white duration-300'>milk</span>
                                <span className='bg-gray-800 py-2 px-3 rounded-md text-gray-200 cursor-pointer hover:bg-[#B99272] hover:text-white duration-300'>barista</span>
                                <span className='bg-gray-800 py-2 px-3 rounded-md text-gray-200 cursor-pointer hover:bg-[#B99272] hover:text-white duration-300'>burger</span>
                                <span className='bg-gray-800 py-2 px-3 rounded-md text-gray-200 cursor-pointer hover:bg-[#B99272] hover:text-white duration-300'>chicken</span>
                                <span className='bg-gray-800 py-2 px-3 rounded-md text-gray-200 cursor-pointer hover:bg-[#B99272] hover:text-white duration-300'>ice-cream</span>
                            </div>
                        </div>
                        <div className='border border-gray-700 p-8 mt-8 rounded-md' data-aos="zoom-in-up" data-aos-delay="500">
                            <h3 className='text-color text-2xl'>Archives List</h3>
                            <dl className='mt-4 grid gap-3'>
                                <dd className='hover:text-[#B99272] cursor-pointer duration-300'>November 2023 (1)</dd>
                                <dd className='hover:text-[#B99272] cursor-pointer duration-300'>October 2023 (2)</dd>
                                <dd className='hover:text-[#B99272] cursor-pointer duration-300'>September 2023 (4)</dd>
                                <dd className='hover:text-[#B99272] cursor-pointer duration-300'>August 2023 (5)</dd>
                                <dd className='hover:text-[#B99272] cursor-pointer duration-300'>July 2023 (5)</dd>
                                <dd className='hover:text-[#B99272] cursor-pointer duration-300'>Jun 2023 (5)</dd>
                            </dl>
                        </div>
                        <div className='border border-gray-700 p-8 mt-8 rounded-md' data-aos="zoom-in-up" data-aos-delay="600">
                            <h3 className='text-color text-2xl'>Archives List</h3>
                            <dl className='mt-4 grid gap-3'>
                                <dd className='text-gray-400'><span className='text-white hover:text-[#B99272] cursor-pointer duration-300'>Sajeeb</span> on <span className='text-white hover:text-[#B99272] cursor-pointer duration-300'>How to access canva pro account</span></dd>
                                <dd className='text-gray-400'><span className='text-white hover:text-[#B99272] cursor-pointer duration-300'>Sajeeb</span> on <span className='text-white hover:text-[#B99272] cursor-pointer duration-300'>How to access canva pro account</span></dd>
                                <dd className='text-gray-400'><span className='text-white hover:text-[#B99272] cursor-pointer duration-300'>Sajeeb</span> on <span className='text-white hover:text-[#B99272] cursor-pointer duration-300'>How to access canva pro account</span></dd>
                            </dl>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Blog;
