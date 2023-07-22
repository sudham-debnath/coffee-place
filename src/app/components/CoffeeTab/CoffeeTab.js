'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CoffeeTab = () => {
    const [openTab, setOpenTab] = useState(1);

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
            image: 'https://kaffen-reactjs.netlify.app/images/menu4.jpg',
            title: 'Cold - Coffee',
            details: '2/3 espresso, 1/3 streamed milk',
            price: '$6.0'
        },
        {
            image: 'https://kaffen-reactjs.netlify.app/images/menu4.jpg',
            title: 'Late',
            details: '2/3 espresso, 1/3 streamed milk',
            price: '$6.0'
        },
        {
            image: 'https://kaffen-reactjs.netlify.app/images/menu1.jpg',
            title: 'Milk Cream Coffee',
            details: '2/3 espresso, 1/3 streamed milk',
            price: '$7.5'
        },
        {
            image: 'https://kaffen-reactjs.netlify.app/images/menu5.jpg',
            title: 'Cappuccino Arabica',
            details: '2/3 espresso, 1/3 streamed milk',
            price: '$2.8'
        },
        {
            image: 'https://kaffen-reactjs.netlify.app/images/menu3.jpg',
            title: 'Barista Pouring Syrup',
            details: '2/3 espresso, 1/3 streamed milk',
            price: '$3.5'
        },
        {
            image: 'https://kaffen-reactjs.netlify.app/images/menu6.jpg',
            title: 'Milk Cream',
            details: '2/3 espresso, 1/3 streamed milk',
            price: '$7.5'
        },
        {
            image: 'https://kaffen-reactjs.netlify.app/images/ins_gal1.jpg',
            title: 'Italian Burger',
            details: 'Tomatoes, italian sausage, ground, onions, cheese',
            price: '$12.8'
        },
        {
            image: 'https://kaffen-reactjs.netlify.app/images/ins_gal3.jpg',
            title: 'Chicken Burger',
            details: 'Ground chicken breast, mustard, paprika, onion',
            price: '$17.5'
        },
        
    ]

    const hotCoffee = popularMenu.slice(0,5)
    const dessert = popularMenu.slice(5,8);
    const fastFood = popularMenu.slice(8,10);

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <div className='flex justify-center mb-10'>
                        <ul
                            className="flex mb-0 list-none flex-wrap pt-3 pb-4 gap-5"
                            role="tablist"
                        >
                            <li className="text-center" data-aos="fade-up" data-aos-delay="100">
                                <a
                                    className={
                                        "font-semibold text-sm uppercase px-5 py-4 shadow-lg rounded-md text-white hover:bg-color" +
                                        (openTab === 1
                                            ? "text-white bg-color"
                                            : "text-gray-400 bg-black")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(1);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist"
                                >
                                    All
                                </a>
                            </li>
                            <li className="text-center" data-aos="fade-up" data-aos-delay="200">
                                <a
                                    className={
                                        "font-semibold text-sm uppercase px-5 py-4 shadow-lg rounded-md text-white hover:bg-color" +
                                        (openTab === 2
                                            ? "text-white bg-color"
                                            : "text-gray-400 bg-black")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(2);
                                    }}
                                    data-toggle="tab"
                                    href="#link2"
                                    role="tablist"
                                >
                                    Fast Food
                                </a>
                            </li>
                            <li className="text-center" data-aos="fade-up" data-aos-delay="300">
                                <a
                                    className={
                                        "font-semibold text-sm uppercase px-5 py-4 shadow-lg rounded-md text-white hover:bg-color" +
                                        (openTab === 3
                                            ? "text-white bg-color"
                                            : "text-gray-400 bg-black")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(3);
                                    }}
                                    data-toggle="tab"
                                    href="#link3"
                                    role="tablist"
                                >
                                    Hot Coffee
                                </a>
                            </li>
                            <li className="text-center mt-5 md:mt-0" data-aos="fade-up" data-aos-delay="500">
                                <a
                                    className={
                                        "font-semibold text-sm uppercase px-5 py-4 shadow-lg rounded-md text-white hover:bg-color" +
                                        (openTab === 4
                                            ? "text-white bg-color"
                                            : "text-gray-400 bg-black")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(4);
                                    }}
                                    data-toggle="tab"
                                    href="#link4"
                                    role="tablist"
                                >
                                    Dessert
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="py-5 flex-auto">
                            <div style={{ backgroundImage: `url(${'/others/menu_logo.png'})` }} className="bg-center bg-contain bg-no-repeat bg-[#090C0F] p-10" >
                                <div className={openTab === 1 ? "grid md:grid-cols-2 gap-10" : "hidden"} id="link1" >
                                    {
                                        popularMenu?.map((menu, index) => <div key={index} className='md:flex gap-5 items-center' data-aos="flip-up">
                                            <Image src={menu.image} alt='Menu Image' width={150} height={200} className='w-full md:w-36 h-40 object-cover rounded-md'></Image>
                                            <div className='text-white mt-6 md:mt-0'>
                                                <h3 className='text-xl'>{menu.title}</h3>
                                                <p className='text-gray-400 mt-2 mb-3'>{menu.details}</p>
                                                <h4 className='text-color text-xl'><span>...............</span> {menu.price}</h4>
                                            </div>
                                        </div>)
                                    }
                                </div>
                                <div className={openTab === 2 ? "grid md:grid-cols-2 gap-10" : "hidden"} id="link2" >
                                    {
                                        fastFood?.map((menu, index) => <div key={index} className='md:flex gap-5 items-center' data-aos="flip-up">
                                            <Image src={menu.image} alt='Menu Image' width={150} height={200} className='w-full md:w-36 h-40 object-cover rounded-md'></Image>
                                            <div className='text-white mt-6 md:mt-0'>
                                                <h3 className='text-xl'>{menu.title}</h3>
                                                <p className='text-gray-400 mt-2 mb-3'>{menu.details}</p>
                                                <h4 className='text-color text-xl'><span>...............</span> {menu.price}</h4>
                                            </div>
                                        </div>)
                                    }
                                </div>
                                <div className={openTab === 3 ? "grid md:grid-cols-2 gap-10" : "hidden"} id="link3" >
                                    {
                                        hotCoffee?.map((menu, index) => <div key={index} className='md:flex gap-5 items-center' data-aos="flip-up">
                                            <Image src={menu.image} alt='Menu Image' width={150} height={200} className='w-full md:w-36 h-40 object-cover rounded-md'></Image>
                                            <div className='text-white mt-6 md:mt-0'>
                                                <h3 className='text-xl'>{menu.title}</h3>
                                                <p className='text-gray-400 mt-2 mb-3'>{menu.details}</p>
                                                <h4 className='text-color text-xl'><span>...............</span> {menu.price}</h4>
                                            </div>
                                        </div>)
                                    }
                                </div>
                                <div className={openTab === 4 ? "grid md:grid-cols-2 gap-10" : "hidden"} id="link4" >
                                    {
                                        dessert?.map((menu, index) => <div key={index} className='md:flex gap-5 items-center' data-aos="flip-up">
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoffeeTab;