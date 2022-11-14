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
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: -50,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
                initialSlide={1}
                loop={true}
                breakpoints={{
                    480: {
                        slidesPerView:2
                    },
                    940: {
                        slidesPerView:3
                    }
                }}
            >
                <SwiperSlide><Item title="KEBAB"/></SwiperSlide>
                <SwiperSlide><Item title="KEBABPIZZA"/></SwiperSlide>
                <SwiperSlide><Item title="PIZZA"/></SwiperSlide>
            </Swiper>
        </div>
    )
}

const Item = (props) => {

    const {title} = props

    const menuItems = [
        {
            nr: 1,
            title: "Kebab i pitabrød",
            discription: "Isbergsalat, tomat, mais, løk, gyroskjøtt og saus",
            price: 110,
        },
        {
            nr: 1,
            title: "Kebab i pitabrød",
            discription: "Isbergsalat, tomat, mais, løk, gyroskjøtt og saus",
            price: 110,
        },
        {
            nr: 1,
            title: "Kebab i pitabrød",
            discription: "Isbergsalat, tomat, mais, løk, gyroskjøtt og saus",
            price: 110,
        },
        {
            nr: 1,
            title: "Kebab i pitabrød",
            discription: "Isbergsalat, tomat, mais, løk, gyroskjøtt og saus",
            price: 110,
        },
        {
            nr: 1,
            title: "Kebab i pitabrød",
            discription: "Isbergsalat, tomat, mais, løk, gyroskjøtt og saus",
            price: 110,
        },
    ]


    return (
        <div className={styles.itemWrapper}>
            <div className={styles.item}>
                <h1 className={styles.itemTitle}>{title}</h1>
                {menuItems.map(x=>(
                    <MenuItem {...x} key={x.nr}/>
                ))}
            </div>
        </div>
    )
}

const MenuItem = (props) => {
    const {nr, title, discription, price} = props

    return (
        <div className={styles.menuItem}>
            <div className='w-2/3'>
                <h1 className={styles.menuItemTitle}>{nr}. {title}</h1>
                <h1 className={styles.menuItemDiscription}>{discription}</h1>
            </div>
            <div>
                <h1 className={styles.menuItemPrice}>{price},-</h1>
            </div>
        </div>
    )
}