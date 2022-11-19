import Image from 'next/image';
import styles from './contact.module.css';
import {
  AiFillPhone,
  AiFillMobile,
  AiFillInstagram,
  AiFillFacebook,
} from 'react-icons/ai';
import { MdMail } from 'react-icons/md';
import { IoMdPin } from 'react-icons/io';

export default function ContactSection(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contact}>
        <div>
          <h1>Åpningstider</h1>
          <div className={styles.openingHours}>
            <p>man - fre</p>
            <h2>12:30 - 21:30</h2>
            <p>lør - søn</p>
            <h2>12:30 - 21:30</h2>
          </div>
        </div>
        <div>
          <h1>Kontakt oss</h1>
          <div className={styles.iconList}>
            <AiFillPhone />
            <p>69 28 33 00</p>
            <AiFillMobile />
            <p>46 19 34 64</p>
            <MdMail />
            <p>vinus.kebab@icloud.com</p>
            <IoMdPin />
            <p>Vinus, Mosseveien 16, 1640 Råde</p>
            <AiFillInstagram />
            <p>@vinuskebab</p>
            <AiFillFacebook />
            <p>Vinus Kebab As</p>
          </div>
        </div>
      </div>
    </div>
  );
}
