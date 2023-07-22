'use client'

import React, { useEffect } from 'react';
import Banner from './components/Banner/Banner';
import Image from 'next/image';
import Services from './components/Services/Services';
import PopularCoffee from './components/PopularCoffee/PopularCoffee';
import ThreeBlog from './components/ThreeBlog/ThreeBlog';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Page = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Banner></Banner>
      <section className='px-5 py-16 md:px-32 md:py-28 bg-color-second text-white'>
        <div className='grid md:grid-cols-2'>
          <div className='w-full md:w-3/4'>
            <p className='text-color' data-aos="fade-right">ABOUT US</p>
            <h2 className='text-4xl my-5 font-semibold' data-aos="fade-right">Organic & Fresh Coffee Provider Center</h2>
            <p className='text-gray-400' data-aos="fade-right" data-aos-delay="100">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione</p>
            <div className='mt-8 flex items-center gap-4 text-xl bg-color p-5 rounded-md' data-aos="flip-up" data-aos-delay="200">
              <Image src='/others/sudham.png' alt='Sudham' width={100} height={100} className='rounded-full'></Image>
              <h4>Quis autem vel eum iure reprehenderit in ealuptate velit esse molestiae</h4>
            </div>
          </div>
          <div className='mt-10 md:mt-0' data-aos="zoom-in">
            <Image src='/others/about_img.png' alt='About Image' width={600} height={600}></Image>
          </div>
        </div>
        <Services></Services>
      </section>

      <section style={{ backgroundImage: 'url(/others/category_bg.jpg)' }} className='px-5 py-16 md:px-32 md:py-28 bg-cover bg-center bg-fixed'>
        <PopularCoffee></PopularCoffee>
      </section>

      <section style={{ backgroundImage: 'url(/others/parallax_icon1.png), url(/others/parallax_icon2.png), url(/others/parallax_icon3.png)', backgroundPosition: 'left top 80px, right top 120px, right bottom 50px', backgroundSize: '150px, 120px, 200px' }} className='px-5 py-16 md:px-32 md:py-28 bg-black bg-no-repeat'>
        <div className='grid md:grid-cols-2 items-center gap-10 md:gap-28'>
          <Image src='/others/choose_img.jpg' width={200} height={100} alt='Choose Us' className='w-full h-full object-cover' data-aos="zoom-in"></Image>
          <div className='text-white'>
            <p className='text-color' data-aos="fade-up">WHY CHOOSE US</p>
            <h2 className='text-4xl my-5 font-semibold' data-aos="fade-up">New London Coffee Founded For Extraordinary Test</h2>
            <p className='text-gray-400' data-aos="fade-up">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis</p>
            <ul className='my-10'>
              <li className='flex items-center gap-6 mb-6' data-aos="fade-up">
                <Image src='/others/choose_icon1.png' width={80} height={100} alt='choose icon'></Image>
                <div>
                  <h3 className='text-xl'>Natural Coffee Beans</h3>
                  <p className='text-gray-400 mt-2'>Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</p>
                </div>
              </li>
              <li className='flex items-center gap-6' data-aos="fade-up">
                <Image src='/others/choose_icon2.png' width={80} height={100} alt='choose icon'></Image>
                <div>
                  <h3 className='text-xl'>100% ISO Certification</h3>
                  <p className='text-gray-400 mt-2'>Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</p>
                </div>
              </li>
            </ul>
            <button class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#B99272] rounded-md group hover:text-[#B99272] duration-300" data-aos="fade-up">
              <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
              <span class="relative text-sm uppercase">Explore More</span>
            </button>
          </div>
        </div>
      </section>

      <section className='bg-color-second px-5 py-16 md:px-32 md:py-20 grid md:grid-cols-3 gap-12'>
        <div className='text-white text-center md:text-start md:flex items-center' data-aos="zoom-in-up" data-aos-delay="100">
          <h2 className='text-color text-6xl'>256+</h2>
          <div className='mt-4 md:mt-0'>
            <h3 className='text-xl'>Premium Clients</h3>
            <p className='text-gray-400 mt-2'>Sed ut perspiciatis unde</p>
          </div>
        </div>
        <div className='text-white text-center md:text-start md:flex items-center' data-aos="zoom-in-up" data-aos-delay="200">
          <h2 className='text-color text-6xl'>362+</h2>
          <div className='mt-4 md:mt-0'>
            <h3 className='text-xl'>Expert Members</h3>
            <p className='text-gray-400 mt-2'>Sed ut perspiciatis unde</p>
          </div>
        </div>
        <div className='text-white text-center md:text-start md:flex items-center gap-6 ' data-aos="zoom-in-up" data-aos-delay="300">
          <h2 className='text-color text-6xl'>753+</h2>
          <div className='mt-4 md:mt-0'>
            <h3 className='text-xl'>Winning Awards</h3>
            <p className='text-gray-400 mt-2'>Sed ut perspiciatis unde</p>
          </div>
        </div>
      </section>

      <section className='px-5 py-16 md:px-32 md:py-28 bg-black'>
        <ThreeBlog></ThreeBlog>
      </section>
    </>
  );
};

export default Page;