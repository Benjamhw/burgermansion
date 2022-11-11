import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar(props) {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/images/vinus_logo.png"
          alt="Vinus Logo"
          width={400}
          height={400 / 4.1}
        />
      </Link>
      <div className={styles.phoneContainer}>
        <Link href="tel:69283300">
          <button className={`${styles.callbutton} ${styles.phone}`}>
            <Image
              src="/images/phone_icon_outlined.svg"
              alt="Phone icon"
              width={22}
              height={22}
            />
            <h2 className={styles.number}>69 28 33 00</h2>
          </button>
        </Link>
        <Link href="tel:46193464">
          <button className={styles.callbutton}>
            <Image
              src="/images/mobile_icon_outlined.svg"
              alt="Phone icon"
              width={22}
              height={22}
            />
            <h2 className={styles.number}>46 19 34 64</h2>
          </button>
        </Link>
      </div>
    </div>
  );
}
