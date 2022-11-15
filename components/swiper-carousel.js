import styles from './swiper-carousel.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css/bundle"
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from 'next/image';

export default function SwiperCarousel({itemData}) {


    
    return (
        <div className={styles.container}>
            <div className='flex justify-start p-10 text-2xl'>
                <Image 
                    src="/images/menuText.svg" 
                    alt="Kebab og pizza meny icon"
                    width="150"
                    height="50"
                />
            </div>
        <div>
            <Swiper 
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                autoHeight={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: -50,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="mySwiper"
                initialSlide={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    stopOnLastSlide: false,
                }}
                breakpoints={{
                    480: {
                        slidesPerView:2
                    },
                    940: {
                        slidesPerView:3
                    },
                    1500: {
                        slidesPerView:4
                    }
                }}
            >
                {itemData.map(item => (
                    <SwiperSlide key={item.name}><Item data={item}/></SwiperSlide>
                ))}

                {/* <SwiperSlide><Item title={<h1 className={styles.itemTitle}>KEBAB<span style={{color:'white'}}>PIZZA</span></h1>}/></SwiperSlide>
                <SwiperSlide><Item title={<h1 className={styles.itemTitle}>KEBAB<span style={{color:'white'}}>PIZZA</span></h1>}/></SwiperSlide>
                <SwiperSlide><Item title={<h1 className={styles.itemTitle}>KEBAB<span style={{color:'white'}}>PIZZA</span></h1>}/></SwiperSlide> */}
            </Swiper>
        </div>
        </div>
    )
}

const Item = (props) => {

    const {data} = props

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
                <h1 className={styles.itemTitle}>
                {data.name.split(' ').map((subStr, i) => (
                    <span key={i} style={{
                        ...(i % 2 !== 0 ? {color:'white'} : {})
                    }}>{subStr}</span>    
                ))}
                </h1>
                {/* <h1 className={styles.itemTitle}>{data.name.split(' ')[0]}<span>{data.name.split(' ').length >[1]}</span></h1> */}
                {data.items.map((x,i)=>(
                    <MenuItem {...x} key={i}/>
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
                <h1 className={styles.menuItemPrice}>{120},-</h1>
            </div>
        </div>
    )
}