import React from 'react';
import Header from '../components/Header/Header';
import Services from '../components/Services/Services';
import { FaCookie, FaCarrot, FaHamburger, FaFish, FaPizzaSlice, FaGlassCheers, FaMugHot, FaSeedling } from "react-icons/fa";
import Image from 'next/image';

const Service = () => {
    return (
        <>
            <Header title={'Services'}></Header>
            <main className='text-white bg-color-second'>
                <section className='px-5 py-16 md:px-32 md:py-28'>
                    <div className='text-center text-white' data-aos="zoom-in">
                        <p className='text-color'>WE PROVIDE</p>
                        <h2 className='text-4xl my-5 font-semibold'>Coffee Place Services One</h2>
                    </div>
                    <div className='-mt-12'>
                        <Services></Services>
                    </div>
                </section>

                <section className='px-5 py-16 md:px-32 md:py-28 bg-black'>
                    <div className='text-center text-white mb-16' data-aos="zoom-in">
                        <p className='text-color'>WHAT WE DO</p>
                        <h2 className='text-4xl my-5 font-semibold'>Coffee Place Services Two</h2>
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12'>
                        <div className="text-center md:text-start" data-aos="fade-up" data-aos-delay="100">
                            <div className="flex justify-center md:block">
                                <div className="text-color bg-color-second p-4 inline-block rounded-lg ">
                                    <FaCookie size={45} />
                                </div>
                            </div>
                            <h3 className="text-xl mt-3">Birthday Cakes</h3>
                            <p className="text-gray-400 mt-2">Sed ut perspiciatis unde</p>
                        </div>
                        <div className="text-center md:text-start" data-aos="fade-up" data-aos-delay="200">
                            <div className="flex justify-center md:block">
                                <div className="text-color bg-color-second p-4 inline-block rounded-lg ">
                                    <FaCarrot size={45} />
                                </div>
                            </div>
                            <h3 className="text-xl mt-3">Fresh Food</h3>
                            <p className="text-gray-400 mt-2">Sed ut perspiciatis unde</p>
                        </div>
                        <div className="text-center md:text-start" data-aos="fade-up" data-aos-delay="300">
                            <div className="flex justify-center md:block">
                                <div className="text-color bg-color-second p-4 inline-block rounded-lg ">
                                    <FaHamburger size={45} />
                                </div>
                            </div>
                            <h3 className="text-xl mt-3">Fast Food</h3>
                            <p className="text-gray-400 mt-2">Sed ut perspiciatis unde</p>
                        </div>
                        <div className="text-center md:text-start" data-aos="fade-up" data-aos-delay="400">
                            <div className="flex justify-center md:block">
                                <div className="text-color bg-color-second p-4 inline-block rounded-lg ">
                                    <FaFish size={45} />
                                </div>
                            </div>
                            <h3 className="text-xl mt-3">Sea Food</h3>
                            <p className="text-gray-400 mt-2">Sed ut perspiciatis unde</p>
                        </div>
                        <div className="text-center md:text-start" data-aos="fade-up" data-aos-delay="500">
                            <div className="flex justify-center md:block">
                                <div className="text-color bg-color-second p-4 inline-block rounded-lg ">
                                    <FaPizzaSlice size={45} />
                                </div>
                            </div>
                            <h3 className="text-xl mt-3">Pizza</h3>
                            <p className="text-gray-400 mt-2">Sed ut perspiciatis unde</p>
                        </div>
                        <div className="text-center md:text-start" data-aos="fade-up" data-aos-delay="600">
                            <div className="flex justify-center md:block">
                                <div className="text-color bg-color-second p-4 inline-block rounded-lg ">
                                    <FaGlassCheers size={45} />
                                </div>
                            </div>
                            <h3 className="text-xl mt-3">Drinks</h3>
                            <p className="text-gray-400 mt-2">Sed ut perspiciatis unde</p>
                        </div>
                        <div className="text-center md:text-start" data-aos="fade-up" data-aos-delay="700">
                            <div className="flex justify-center md:block">
                                <div className="text-color bg-color-second p-4 inline-block rounded-lg ">
                                    <FaMugHot size={45} />
                                </div>
                            </div>
                            <h3 className="text-xl mt-3">Coffee</h3>
                            <p className="text-gray-400 mt-2">Sed ut perspiciatis unde</p>
                        </div>
                        <div className="text-center md:text-start" data-aos="fade-up" data-aos-delay="800">
                            <div className="flex justify-center md:block">
                                <div className="text-color bg-color-second p-4 inline-block rounded-lg ">
                                    <FaSeedling size={45} />
                                </div>
                            </div>
                            <h3 className="text-xl mt-3">Vegetables</h3>
                            <p className="text-gray-400 mt-2">Sed ut perspiciatis unde</p>
                        </div>
                    </div>
                </section>

                <section className='px-5 py-16 md:px-32 md:py-28 bg-color-second'>
                    <div className='text-center text-white mb-16' data-aos="zoom-in">
                        <p className='text-color'>OUR AWESOME</p>
                        <h2 className='text-4xl my-5 font-semibold'>Coffee Place Services Three</h2>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-12 bg-black py-12 md:p-14'>
                        <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
                            <div className="flex justify-center md:block">
                                <div className="text-color bg-color-second p-8 inline-block rounded-full">
                                    <Image src='/icon/service_icon1.png' alt='Service Icon' className='w-14 h-14' width={52} height={60} />
                                </div>
                            </div>
                            <h3 className="text-xl mt-3">Birthday Cakes</h3>
                            <p className="text-gray-400 mt-2">Sed ut perspiciatis unde</p>
                        </div>
                        <div className="text-center" data-aos="zoom-in" data-aos-delay="200">
                            <div className="flex justify-center md:block">
                                <div className="text-color bg-color-second p-8 inline-block rounded-full">
                                    <Image src='/icon/service_icon2.png' alt='Service Icon' className='w-14 h-14' width={65} height={150} />
                                </div>
                            </div>
                            <h3 className="text-xl mt-3">Fresh Foods</h3>
                            <p className="text-gray-400 mt-2">Sed ut perspiciatis unde</p>
                        </div>
                        <div className="text-center" data-aos="zoom-in" data-aos-delay="300">
                            <div className="flex justify-center md:block">
                                <div className="text-color bg-color-second p-8 inline-block rounded-full">
                                    <Image src='/icon/service_icon3.png' alt='Service Icon' className='w-14 h-14' width={65} height={150} />
                                </div>
                            </div>
                            <h3 className="text-xl mt-3">Skills Chefs</h3>
                            <p className="text-gray-400 mt-2">Sed ut perspiciatis unde</p>
                        </div>
                        <div className="text-center" data-aos="zoom-in" data-aos-delay="400">
                            <div className="flex justify-center md:block">
                                <div className="text-color bg-color-second p-8 inline-block rounded-full">
                                    <Image src='/icon/service_icon4.png' alt='Service Icon' className='w-14 h-14' width={40} height={40} />
                                </div>
                            </div>
                            <h3 className="text-xl mt-3">Organic Juice</h3>
                            <p className="text-gray-400 mt-2">Sed ut perspiciatis unde</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Service;