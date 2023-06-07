import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logo}>DEMO Streaming</h1>
      </div>
      <div className={styles.actions}>
        <Link to="#" className={styles.loginLink}>
          Log in
        </Link>
        <button className={styles.startButton}>Start your free trial</button>
      </div>
    </header>
  );
}

export default Header;
