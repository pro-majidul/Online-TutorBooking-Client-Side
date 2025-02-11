import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import bgimg1 from '../assets/img1.jpg'
import bgimg2 from '../assets/img2.jpg'
import bgimg3 from '../assets/img3.jpg'
import bgimg4 from '../assets/img4.jpg'
import bgimg5 from '../assets/img5.jpg'
import React from 'react';
import Review from './Review'

const CarusolReview = () => {
    return (
        <div className='container md:px-6 py-10 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <Review
                    
                    img={bgimg1}
                    title='Amazing Learning Experience!'
                    name = 'Emily R'
                    description ='I’ve tried other platforms, but this one stands out! The detailed tutor profiles and real-time reviews made the decision-making process so simple. I’m currently learning Japanese, and my tutor is amazing!'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Review
                    img={bgimg2}
                    title='Great Flexibility in Learning'
                    name = 'Carlos M'
                    description ='This is the best tutor platform I’ve used! The variety of tutors available is incredible, and I appreciate the secure booking process. My German tutor is so knowledgeable and patient, and I’m already seeing progress!'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Review 
                    img={bgimg3}
                    title='Best Tutor Platform Out There!'
                    name = 'Sophia L'
                    description ='What I love most is the personalized experience. My tutor is not only experienced but also genuinely invested in my learning. The website is easy to use, and I appreciate the customer support team’s quick responses. Five stars'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Review 
                    img={bgimg4}
                    title='Incredible Tutors and Resources'
                    name = 'Aisha H'
                    description ='I’ve booked multiple sessions through this platform, and every experience has been fantastic. The tutors are professional, the website is fast, and the pricing is transparent. It’s a game-changer for online learning!'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Review 
                    img={bgimg5}
                    title='Personalized Learning Experience'
                    name = 'Michael T'
                    description ='I was hesitant at first, but after booking my first tutorial, I was hooked. The tutors here are world-class, and I love that I can see reviews and compare prices easily. Great job creating such an amazing platform!'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CarusolReview;