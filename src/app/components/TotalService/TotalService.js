'use client'
import { FaUsers, FaUserTie, FaAward, FaGrinStars } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const TotalService = () => {
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-30">
            <div className="text-center md:text-start" data-aos="fade-up" data-aos-delay="100">
                <div className="flex justify-center md:block">
                    <div className="text-color bg-color-second p-4 inline-block rounded-lg ">
                        <FaUsers size={50} />
                    </div>
                </div>
                <h2 className="text-color text-6xl my-4">256+</h2>
                <h3 className="text-2xl">Premium Clients</h3>
                <p className="text-gray-400 mt-2">Sed ut perspiciatis unde</p>
            </div>
            <div className="text-center md:text-start mt-12 md:mt-0" data-aos="fade-up" data-aos-delay="200">
                <div className="flex justify-center md:block">
                    <div className="text-color bg-color-second p-4 inline-block rounded-lg ">
                        <FaUserTie size={50} />
                    </div>
                </div>
                <h2 className="text-color text-6xl my-4">36+</h2>
                <h3 className="text-2xl">Professional Chefs</h3>
                <p className="text-gray-400 mt-2">Sed ut perspiciatis unde</p>
            </div>
            <div className="text-center md:text-start mt-12 md:mt-0" data-aos="fade-up" data-aos-delay="300">
                <div className="flex justify-center md:block">
                    <div className="text-color bg-color-second p-4 inline-block rounded-lg ">
                        <FaAward size={50} />
                    </div>
                </div>
                <h2 className="text-color text-6xl my-4">753+</h2>
                <h3 className="text-2xl">Winning Awards</h3>
                <p className="text-gray-400 mt-2">Sed ut perspiciatis unde</p>
            </div>
            <div className="text-center md:text-start mt-12 md:mt-0" data-aos="fade-up" data-aos-delay="400">
                <div className="flex justify-center md:block">
                    <div className="text-color bg-color-second p-4 inline-block rounded-lg ">
                        <FaGrinStars size={50} />
                    </div>
                </div>
                <h2 className="text-color text-6xl my-4">100+</h2>
                <h3 className="text-2xl">5 Star Reviews</h3>
                <p className="text-gray-400 mt-2">Sed ut perspiciatis unde</p>
            </div>
        </div>
    );
};

export default TotalService;