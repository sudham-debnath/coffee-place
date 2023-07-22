'use client'

import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularCoffee = () => {
    useEffect(() => {
        AOS.init();
      }, []);

    const popularMenu = [
        {
            image: 'https://kaffen-reactjs.netlify.app/images/menu1.jpg',
            title: 'Americano Coffee',
            details: '2/3 espresso, 1/3 streamed milk',
            price: '$4.9'
        },
        {
            image: 'https://kaffen-reactjs.netlify.app/images/menu2.jpg',
            title: 'Espresso Coffee',
            details: '2/3 espresso, 1/3 streamed milk',
            price: '$4.9'
        },
        {
            image: 'https://kaffen-reactjs.netlify.app/images/menu3.jpg',
            title: 'Barista Pouring Syrup',
            details: '2/3 espresso, 1/3 streamed milk',
            price: '$3.5'
        },
        {
            image: 'https://kaffen-reactjs.netlify.app/images/menu4.jpg',
            title: 'Cold - Coffee',
            details: '2/3 espresso, 1/3 streamed milk',
            price: '$6.0'
        },
        {
            image: 'https://kaffen-reactjs.netlify.app/images/menu5.jpg',
            title: 'Cappuccino Arabica',
            details: '2/3 espresso, 1/3 streamed milk',
            price: '$2.8'
        },
        {
            image: 'https://kaffen-reactjs.netlify.app/images/menu1.jpg',
            title: 'Milk Cream Coffee',
            details: '2/3 espresso, 1/3 streamed milk',
            price: '$7.5'
        },
    ]

    return (
        <div>
            <div className='text-center text-white' data-aos="zoom-in">
                <p className='text-color'>CHOOSE BEST COFFEE</p>
                <h2 className='text-4xl my-5 font-semibold'>Coffee Place Popular Coffee Menu</h2>
            </div>
            <div style={{ backgroundImage: `url(${'/others/menu_logo.png'})` }} className='bg-center bg-contain bg-no-repeat bg-[#090C0F] grid md:grid-cols-2 gap-10 p-10 mt-16'>
                {
                    popularMenu?.map((menu, index) => <div key={index} className='md:flex gap-5 items-center' data-aos="flip-up" data-aos-delay='100'>
                        <Image src={menu.image} alt='Menu Image' width={150} height={200} className='w-full md:w-36 h-40 object-cover rounded-md'></Image>
                        <div className='text-white mt-6 md:mt-0'>
                            <h3 className='text-xl'>{menu.title}</h3>
                            <p className='text-gray-400 mt-2 mb-3'>{menu.details}</p>
                            <h4 className='text-color text-xl'><span>...............</span> {menu.price}</h4>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularCoffee;