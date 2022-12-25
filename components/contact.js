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
import Link from 'next/link';

export default function ContactSection(props) {
  const contactItems = [
    {
      text: '67 90 90 67',
      icon: <AiFillPhone />,
      url: 'tel:67909067',
    },
    {
      text: '46 19 34 64',
      icon: <AiFillMobile />,
      url: 'tel:46193464',
    },
    {
      text: 'vinus.kebab@icloud.com',
      icon: <MdMail />,
      url: 'mailto:vinus.kebab@icloud.com',
    },
    {
      text: 'Kongens Gate 28, 1530 Moss',
      icon: <IoMdPin />,
      url: 'https://www.google.com/maps/place/Burger+Mansion+Moss/@59.4359674,10.6653747,17z/data=!3m1!4b1!4m5!3m4!1s0x4641530b3a755779:0x73a97044caeef1e8!8m2!3d59.4359674!4d10.6679496',
    },
    {
      text: '@vinuskebab',
      icon: <AiFillInstagram />,
      url: 'https://www.instagram.com/vinuskebab/',
    },
    {
      text: 'Vinus Kebab As',
      icon: <AiFillFacebook />,
      url: 'https://www.facebook.com/people/Vinus-Kebab-As/100054486819161/',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.contact}>
        <div>
          <h1>Åpningstider</h1>
          <div className={styles.openingHours}>
            <p>man - fre</p>
            <h2>16:00 - 21:00</h2>
            <p>lør - søn</p>
            <h2>16:00 - 21:00</h2>
          </div>
        </div>
        <div>
          <h1>Kontakt oss</h1>
          <div className={styles.iconList}>
            {contactItems.map(x => (
              <Link href={x.url} key={x.text}>
                <div className={styles.contactItem}>
                  {x.icon}
                  <p>{x.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
