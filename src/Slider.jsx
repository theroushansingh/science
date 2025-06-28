// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import mens from './assets/men1.png'
import womens from './assets/womens.png'
import girl from './assets/girl.png'

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import Section from './Section';


// import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';

export default function Slider() {
  return (
    <>
     <div  className='swipers' style={{}}>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}

         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      
      
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              'url(https://swiperjs.com/demos/images/nature-1.jpg)',
          }}
          data-swiper-parallax="-23%"
        ></div>
       
        <SwiperSlide>
        <Section image={mens}/>
        </SwiperSlide>
        <SwiperSlide>
                  <Section image={womens}/>

        </SwiperSlide>
        <SwiperSlide>
                  <Section image={girl}/>

        </SwiperSlide>

      </Swiper>
              </div>
    </>
  );
}
