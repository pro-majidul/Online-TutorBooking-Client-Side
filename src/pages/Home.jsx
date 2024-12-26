import React from 'react';
import Banner from '../components/Banner';
import Starts from '../components/Starts';
import Languages from '../components/Languages';
import FAQ from '../components/FAQ';
import Review from '../components/Review';
import CarusolReview from '../components/CarusolReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <main>
                <Starts></Starts>
                <div>
                    <Languages></Languages>
                </div>
                <div className='my-5'>
                <CarusolReview></CarusolReview>
                </div>
                <div className='mb-5'>
                    <FAQ></FAQ>
                </div>


            </main>


        </div>
    );
};

export default Home;