import React from 'react';
import Banner from '../components/Banner';
import Starts from '../components/Starts';
import Languages from '../components/Languages';
import FAQ from '../components/FAQ';
import CarusolReview from '../components/CarusolReview';

const Home = () => {
    return (
        <div className=''>
            <div className='bg-[#ff7aac] w-full'>

                <Banner></Banner>
            </div>
            <main className='md:space-y-10 md:mb-5 min-h-[calc(100vh-300px)] w-11/12 max-w-7xl mx-auto '>
                <Starts></Starts>
                <div className='shadow-lg'>
                    <div >
                        <h3 className='my-5 py-5 text-center text-xl md:text-3xl font-medium  md:font-bold'>Languages</h3>

                    </div>
                    <Languages></Languages>
                </div>
                <div className='my-5 shadow-md'>
                    <div>
                        <h3 className='my-5 py-5 text-center text-xl md:text-3xl font-medium  md:font-bold'>What Client Says</h3>
                    </div>
                    <CarusolReview></CarusolReview>
                </div>
                <div className='mt-5 md:mb-10 md:pb-10 '>
                    <FAQ></FAQ>
                </div>


            </main>


        </div>
    );
};

export default Home;