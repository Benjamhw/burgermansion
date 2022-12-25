import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from './layout';
import { Source_Serif_4, Oswald, Caveat } from '@next/font/google';
import SwiperCarousel from '../components/swiper-carousel';
import { getFoodMenuData } from '../lib/food_menus';
import AllergensSection from '../components/allergens';
import ContactSection from '../components/contact';
import Link from 'next/link';

const source_serif_4 = Source_Serif_4();
const oswald = Oswald();

export async function getStaticProps() {
  const allFoodMenuData = getFoodMenuData();
  return {
    props: {
      allFoodMenuData,
    },
  };
}

export default function Home({ allFoodMenuData }) {
  return (
    <Layout>
      <div className={`${styles.container}`}>
        <Head>
          <title>Burger Mansion Moss | Demo Nettside</title>
          <meta
            name="description"
            content="Demo nettside for Burger Mansion Moss."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.headerContainer}>
          <Image
            className={styles.headerImage}
            src="/images/hamburgerHeader.webp"
            alt="Burger Mansion | Burger"
            fill
            priority
          />
          <div className={styles.headerOverlay}></div>
          <div
            className={`${source_serif_4.className} ${styles.headerTextDiv}`}
          >
            <h3>VELKOMMEN TIL</h3>
            <h1>BURGER MANSION MOSS</h1>
          </div>
        </div>
        <SwiperCarousel itemData={allFoodMenuData} />
        <AllergensSection />
        <ContactSection />
        <footer className={styles.footer}>
          <Link
            href="https://wetobo.no"
            target="_blank"
            rel="noopener noreferrer"
          >
            Designet og utviklet av{' '}
            <div className={styles.logoContainer}>
              <Image
                src="/images/wetobo_logo_full.png"
                alt="Wetobo Digital Solutions Logo"
                fill
                className={styles.logo}
              />
            </div>
          </Link>
        </footer>
      </div>
    </Layout>
  );
}
