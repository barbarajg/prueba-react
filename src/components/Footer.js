import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.links}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <span>|</span>
          <span>Terms and Conditions</span>
          <span>|</span>
          <span>Privacy Policy</span>
          <span>|</span>
          <span>Collection Statement</span>
          <span>|</span>
          <span>Help</span>
          <span>|</span>
          <span>Manage Account</span>
        </div>
      </div>
      <div className={styles.row}>
        <span className={styles.copyRight}>
          &copy; 2023 DEMO Streaming. All Rights Reserved.
        </span>
      </div>
      <div className={styles.row}>
        <div className={styles.socialIcons}>
          <img
            src="/assets/social/facebook-white.svg"
            alt="Facebook"
            className={styles.socialIcon}
          />
          <img
            src="/assets/social/twitter-white.svg"
            alt="Twitter"
            className={styles.socialIcon}
          />
          <img
            src="/assets/social/instagram-white.svg"
            alt="Instagram"
            className={styles.socialIcon}
          />
        </div>
        <div className={styles.storeIcons}>
          <img
            src="/assets/store/app-store.svg"
            alt="App Store"
            className={styles.storeIcon}
          />
          <img
            src="/assets/store/play-store.svg"
            alt="Play Store"
            className={styles.storeIcon}
          />
          <img
            src="/assets/store/windows-store.svg"
            alt="Windows Store"
            className={styles.storeIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
