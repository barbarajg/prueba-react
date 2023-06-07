import React from 'react';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li className={styles.navItem}>Inicio</li>
        <li className={styles.navItem}>Series</li>
        <li className={styles.navItem}>Películas</li>
      </ul>
    </nav>
  );
}

export default Navbar;


