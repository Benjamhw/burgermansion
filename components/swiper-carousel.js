import styles from './swiper-carousel.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper';

import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Image from 'next/image';
import { useState } from 'react';

export default function SwiperCarousel({ itemData }) {
  return (
    <div className={styles.container}>
      <div className="flex justify-start p-10 text-2xl">
        <Image
          src="/images/menuText.svg"
          alt="Kebab og pizza meny icon"
          width="150"
          height="50"
        />
      </div>
      <div>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          autoHeight={false}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: -50,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className={styles.swiper}
          initialSlide={1}
          loop={true}
          // autoplay={{
          //     delay: 30000,
          //     stopOnLastSlide: false,
          // }}
          navigation={true}
          breakpoints={{
            480: {
              slidesPerView: 2,
            },
            940: {
              slidesPerView: 3,
            },
            1500: {
              slidesPerView: 4,
            },
          }}
        >
          {itemData.map(item => (
            <SwiperSlide key={item.name}>
              <Item data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

const Item = props => {
  const { data } = props;

  let showSizes = data.items.some(x => typeof x.price === 'object');

  return (
    <div className={`${styles.itemWrapper}`}>
      <div className={styles.item}>
        <div className={styles.itemTitleWrapper}>
          <h1 className={styles.itemTitle}>
            {data.name.split(' ').map((subStr, i) => (
              <span
                key={i}
                style={{
                  ...(i % 2 !== 0 ? { color: 'white' } : {}),
                }}
              >
                {subStr}
              </span>
            ))}
          </h1>
          {showSizes && <h1>medium / stor</h1>}
        </div>

        {data.items.map((x, i) => (
          <MenuItem {...x} key={i} />
        ))}
      </div>
      <div className={`${styles.itemOverlay}`}></div>
    </div>
  );
};

const MenuItem = props => {
  const { nr, title, discription, price } = props;
  console.log(typeof price);

  let priceElm = price;
  if (typeof price === 'object') {
    priceElm = `${price.medium},- / ${price.stor},-`;
  } else {
    priceElm = `${price},-`;
  }

  return (
    <div className={styles.menuItem}>
      <div className="w-2/3">
        <h1 className={styles.menuItemTitle}>
          {nr}. {title}
        </h1>
        <h1 className={styles.menuItemDiscription}>{discription}</h1>
      </div>
      <div>
        <h1 className={styles.menuItemPrice}>{priceElm}</h1>
      </div>
    </div>
  );
};
