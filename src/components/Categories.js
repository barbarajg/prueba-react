import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Categories.module.css';

function Categories() {
  return (
    <div className={styles.categories}>
      <Link to="/series" className={styles.category}>
        <div className={styles.categoryInner}>
          <div className={styles.imageContainer}>
            <img src="/assets/placeholder.png" alt="Series" className={styles.image} />
          </div>
          <span className={styles.categoryText}>SERIES</span>
        </div>
        <span className={styles.categoryCaption}>Popular Series</span>
      </Link>
      <Link to="/movies" className={styles.category}>
        <div className={styles.categoryInner}>
          <div className={styles.imageContainer}>
            <img src="/assets/placeholder.png" alt="Movies" className={styles.image} />
          </div>
          <span className={styles.categoryText}>MOVIES</span>
        </div>
        <span className={styles.categoryCaption}>Popular Movies</span>
      </Link>
    </div>
  );
}

export default Categories;
