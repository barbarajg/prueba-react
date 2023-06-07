import React, { useState } from 'react';
import seriesData from '../data/sample.json';
import styles from '../styles/Series.module.css';

const Series = () => {
  const [selectedSeries, setSelectedSeries] = useState(null);
  const filteredSeries = seriesData.entries.filter(item => item.releaseYear >= 2010);
  const sortedSeries = filteredSeries.sort((a, b) => a.title.localeCompare(b.title));

  const handleImageClick = (series) => {
    setSelectedSeries(series);
  };

  const handleModalClose = () => {
    setSelectedSeries(null);
  };

  return (
    <div>
      <h1>Series</h1>
      <div className={styles.grid}>
        {sortedSeries.map((item, index) => (
          <div key={index} className={styles.gridItem} onClick={() => handleImageClick(item)}>
            {item.images && item.images['Poster Art'] && item.images['Poster Art'].url ? (
              <div
                className={styles.seriesImage}
                style={{
                  backgroundImage: `url(${item.images['Poster Art'].url})`
                }}
              />
            ) : (
              <div className={styles.seriesImagePlaceholder}>
                <span>{item.title}</span>
              </div>
            )}
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      {selectedSeries && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalContent}>
            <h2>{selectedSeries.title}</h2>
            {selectedSeries.images && selectedSeries.images['Poster Art'] && selectedSeries.images['Poster Art'].url && (
              <div className={styles.modalImageWrapper}>
                <img
                  src={selectedSeries.images['Poster Art'].url}
                  alt={selectedSeries.title}
                  className={styles.modalImage}
                />
              </div>
            )}
            <p>{selectedSeries.description}</p>
            <p>Release Year: {selectedSeries.releaseYear}</p>
            <button onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Series;
