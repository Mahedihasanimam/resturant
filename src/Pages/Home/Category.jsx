
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import img1 from "../../assets/home/slide1.jpg"
import img2 from "../../assets/home/slide2.jpg"
import img3 from "../../assets/home/slide3.jpg"
import img4 from "../../assets/home/slide4.jpg"
import img5 from "../../assets/home/slide5.jpg"
const Category = () => {
    return (
        <div className='px-4 mb-12'>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         <SwiperSlide className=''>
            <div className='absolute hover:bg-black h-full w-full hover:bg-opacity-50 transition-colors cursor-pointer'>
           
            </div>
            <img className='w-full ' src={img1} alt="product" />
            <h1 className='absolute lg:bottom-6 md:bottom-4 bottom-2 left-1/3 text-white  lg:text-2xl md:text-2xl text-sm font-bold '>Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
        <div className='absolute hover:bg-black h-full w-full hover:bg-opacity-50 transition-colors cursor-pointer'>
           
            </div>
        <img className='w-full'  src={img2} alt="product" />
        <h1 className='absolute lg:bottom-6 md:bottom-4 bottom-2 left-1/3 text-white  lg:text-2xl md:text-2xl text-sm font-bold '>Soups</h1>
        </SwiperSlide>
        <SwiperSlide>
        <div className='absolute hover:bg-black h-full w-full hover:bg-opacity-50 transition-colors cursor-pointer'>
           
            </div>
        <img className='w-full' src={img3} alt="product" />
        <h1 className='absolute lg:bottom-6 md:bottom-4 bottom-2 left-1/3 text-white  lg:text-2xl md:text-2xl text-sm font-bold  '>Pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
        <div className='absolute hover:bg-black h-full w-full hover:bg-opacity-50 transition-colors cursor-pointer'>
           
            </div>
        <img className='w-full' src={img4} alt="product" />
        <h1 className='absolute lg:bottom-6 md:bottom-4 bottom-2 left-1/3 text-white  lg:text-2xl md:text-2xl text-sm font-bold '>cake</h1>
        </SwiperSlide>
        <SwiperSlide>
        <div className='absolute hover:bg-black h-full w-full hover:bg-opacity-50 transition-colors cursor-pointer'>
    
            </div>
        <img className='w-full' src={img5} alt="product" />
        <h1 className='absolute lg:bottom-6 md:bottom-4 bottom-2 left-1/3 text-white  lg:text-2xl md:text-2xl text-sm font-bold '>Salads</h1>
        </SwiperSlide>
    
      </Swiper>
        </div>
    );
};

export default Category;