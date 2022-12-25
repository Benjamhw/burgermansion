import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import styles from './navbar.module.css';

export default function Navbar(props) {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback(event => {
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener('scroll', onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true });
    };
  }, [onScroll]);

  return (
    <div
      className={`${styles.navbar} ${scrollY > 50 && styles.navbarScrolled}`}
    >
      <div></div>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/images/burgermansion_logo2.svg"
          alt="Burger Mansion Logo"
          width={0}
          height={0 / 4.1}
        />
      </Link>
      <div className={styles.phoneContainer}>
        <Link href="tel:69283300">
          <button className={`${styles.callbutton} ${styles.phone}`}>
            <Image
              src="/images/phone_icon_outlined.svg"
              alt="Phone icon"
              width={0}
              height={0}
              style={{ width: 22, height: 'auto' }}
            />
            <h2 className={styles.number}>69 28 33 00</h2>
          </button>
        </Link>
        {/* <Link href="tel:46193464">
          <button className={styles.callbutton}>
            <Image
              src="/images/mobile_icon_outlined.svg"
              alt="Phone icon"
              width={0}
              height={0}
              style={{ width: 22, height: 'auto' }}
            />
            <h2 className={styles.number}>46 19 34 64</h2>
          </button>
        </Link> */}
      </div>
    </div>
  );
}
