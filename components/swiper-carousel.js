import { useEffect, useState } from 'react'
import styles from './swiper-carousel.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'

// Import Swiper styles
import "swiper/css/bundle"
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import Image from 'next/image';

export default function SwiperCarousel(props) {
    
    return (
        <div className={styles.container}>
            <Swiper 
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
                initialSlide={1}
                >

                    <SwiperSlide><Item/></SwiperSlide>
                    <SwiperSlide><Item/></SwiperSlide>
                    <SwiperSlide><Item/></SwiperSlide>

            </Swiper>
        </div>
    )
}

const Item = (props) => {
    return (
        <div className={styles.item}>
            hello
        </div>
    )
}