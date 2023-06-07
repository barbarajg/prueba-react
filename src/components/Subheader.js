import React from 'react';
import styles from '../styles/Subheader.module.css';

function Subheader() {
  return (
    <div className={styles.subheader}>
      <div className={styles.title}>
        <h2>Popular Titles</h2>
      </div>
    </div>
  );
}

export default Subheader;
