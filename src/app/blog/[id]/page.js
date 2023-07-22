import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';

const Page = async ({ params }) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`);
    const data = await res.json();
    const mainData = data.meals[0];

    return (
        <>
            <header className='px-4 py-28 md:p-36 bg-cover bg-center text-white bg-fixed text-center' style={{ backgroundImage: `url(${mainData.strMealThumb})` }}>
                <p className='flex items-center gap-2 justify-center'><FaRegCalendarAlt /> 22 July 2023 - {mainData.strCategory}</p>
                <h1 className='text-5xl md:text-8xl my-6 md:my-8 font-bold' data-aos="fade-right">{mainData.strMeal}</h1>
            </header>

            <main className='text-white bg-color-second'>
                <section className='px-5 py-16 md:px-32 md:py-28'>
                    <p className='text-gray-400'>{mainData.strInstructions}</p>
                    <div className='flex flex-wrap gap-2 mt-10 mb-16'>
                        <p>Tags: <span className='bg-gray-800 py-2 px-3 rounded-md text-gray-200 cursor-pointer hover:bg-[#B99272] hover:text-white duration-300'>coffee</span></p>
                    </div>
                    <div>
                        <h3 className='text-2xl mb-6'>Leave a comment</h3>
                        <form>
                            <input className='border border-gray-700 bg-transparent p-4 w-full rounded-md' type="text" name="name" id="name" placeholder='Full Name'  data-aos="fade-up"/>
                            <input className='border border-gray-700 bg-transparent p-4 w-full rounded-md my-6' type="email" name="email" id="email" placeholder='Email Address'  data-aos="fade-up"/>
                            <textarea className='border border-gray-700 bg-transparent p-4 w-full rounded-md' name="comment" id="" cols="30" rows="10" data-aos="fade-up"></textarea>
                            <div className="mt-6">
                                <button type="submit" class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#B99272] rounded-md group hover:text-[#B99272] duration-300" data-aos="fade-up">
                                    <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                                    <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                                    <span class="relative text-sm uppercase tracking-widest">Submit</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Page;