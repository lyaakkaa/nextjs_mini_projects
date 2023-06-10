import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 WebApp. Made with love by Lyaka.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="WebApp Facebook Account" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="WebApp" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="WebApp" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="WebApp" />
      </div>
    </div>
  );
};

export default Footer;