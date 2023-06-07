import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Categories.module.css';

function Categories() {
  return (
    <div className={styles.categories}>
      <Link to="/series" className={styles.category}>
        <div className={styles.categoryInner}>
          <div className={styles.imageContainer}>
            <img src="/assets/placeholder.png" alt="Series" />
          </div>
          <span className={styles.categoryText}>SERIES</span>
          <span className={styles.categoryCaption}>Popular Series</span>
        </div>
      </Link>
      <Link to="/movies" className={styles.category}>
        <div className={styles.categoryInner}>
          <div className={styles.imageContainer}>
            <img src="/assets/placeholder.png" alt="Movies" />
          </div>
          <span className={styles.categoryText}>MOVIES</span>
          <span className={styles.categoryCaption}>Popular Movies</span>
        </div>
      </Link>
    </div>
  );
}

export default Categories;
