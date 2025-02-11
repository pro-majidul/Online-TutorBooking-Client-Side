import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className='w-full max-w-7xl mx-auto px-10'>
            <div className="container  flex flex-col-reverse justify-center items-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-3xl font-bold text-black leading-none sm:text-6xl">Learn Languages
                        <span className="dark:text-violet-600"> Achieve Dreams</span> with Expert Tutors
                    </h1>
                    <p className="mt-6 mb-8 text-lg text-black sm:mb-12">With flexible schedules, diverse subjects, and top-rated tutors, learning has never been this convenient
                        <br className="hidden md:inline lg:hidden" /> Master a new language or subject with personalized lessons from experienced tutors
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link to='/find-tutors' className="px-8 py-3 hover:bg-green-400 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Get Started</Link>
                        <Link className="px-8 py-3 hover:bg-green-400 text-lg font-semibold border rounded dark:border-gray-800">Learn More</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center  mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="https://i.ibb.co.com/fSHmt75/pexels-mart-production-8472919.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default Banner;