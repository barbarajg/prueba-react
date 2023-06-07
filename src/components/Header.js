import React from 'react';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.leftContent}>
          <h1>DEMO Streaming</h1>
        </div>
        <div className={styles.rightContent}>
          <a href="#">Log in</a>
          <button>Start your free trial</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
