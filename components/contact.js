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
      text: '69 28 33 00',
      icon: <AiFillPhone />,
      url: 'tel:69283300',
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
      text: 'Vinus, Mosseveien 16, 1640 Råde',
      icon: <IoMdPin />,
      url: 'http://maps.google.com/?q=Vinus, Mosseveien 16, 1640 Råde',
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
            <h2>12:30 - 21:30</h2>
            <p>lør - søn</p>
            <h2>12:30 - 21:30</h2>
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
