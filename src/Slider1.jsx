// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import face1 from './assets/casual1.jpg'
import face2 from './assets/casual2.2.jpg'
import face3 from './assets/western1.jpg'
import face4 from './assets/Programmer.png'

import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination,Autoplay } from 'swiper/modules';
import Testimonial from './Testimonial';

export default function App() {
    return (
        <>


            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                     breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"

            >

                <SwiperSlide>
                    <Testimonial Name="Roushan" p='lorem' face={face1}/>
                </SwiperSlide>


                <SwiperSlide>
                    <Testimonial Name="sooraj" face={face2} para=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Testimonial  Name="rohit" face={face3} />
                </SwiperSlide>
                <SwiperSlide>
                    <Testimonial Name="alok" face={face4}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Testimonial />
                </SwiperSlide>
                <SwiperSlide>
                    <Testimonial />
                </SwiperSlide>
                <SwiperSlide>
                    <Testimonial />
                </SwiperSlide>
                <SwiperSlide>
                    <Testimonial />
                </SwiperSlide>

            </Swiper>

        </>
    );
}
