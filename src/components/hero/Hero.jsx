import React from 'react'
import "./Hero.scss"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import banner1 from "../../assets/banner1.jpg"
import banner2 from "../../assets/banner2.jpg"
import banner3 from "../../assets/banner3.jpg"
import banner4 from "../../assets/banner4.jpg"
import banner5 from "../../assets/banner5.jpg"


const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <Swiper
                    loop={true}
                    pagination={true}
                    modules={[Pagination]}
                    className="mySwiper hero">
                    <SwiperSlide className='hero__banner'>
                        <img src={banner1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='hero__banner'>
                        <img src={banner2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='hero__banner'>
                        <img src={banner3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='hero__banner'>
                        <img src={banner4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='hero__banner'>
                        <img src={banner5} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Hero