import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "./layout";
import { Source_Serif_4 } from "@next/font/google";
import SwiperCarousel from "../components/swiper-carousel";

const source_serif_4 = Source_Serif_4();

export default function Home() {
  return (
    <Layout>
      <div className={`${styles.container}`}>
        <Head>
          <title>Vinus Pizza og Kebab | Demo Nettside</title>
          <meta
            name="description"
            content="Demo nettside for Vinus Pizza og Kebab Råde."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.headerContainer}>
          <Image
            style={{ objectFit: "cover", objectPosition: "0 20%" }}
            src="/images/kebabpizza.jpg"
            alt="Vinus Pizza og Kebab - Råde | Kebabpizza"
            fill
          />
          <div className={styles.headerOverlay}></div>
          <div
            className={`${source_serif_4.className} ${styles.headerTextDiv}`}
          >
            <h3>WELKOMMEN TIL</h3>
            <h1>VINUS PIZZA OG KEBAB</h1>
          </div>
        </div>
        <SwiperCarousel/>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </Layout>
  );
}
