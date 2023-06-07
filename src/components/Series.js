import React, { useState, useEffect } from 'react';
import seriesData from '../data/sample.json';
import styles from '../styles/Series.module.css';

const Series = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchSeries = () => {
      const data = seriesData.entries.filter(item => item.programType === 'series');

      setTimeout(() => {
        setSeries(data);
        setIsLoading(false);
      }, 1000);
    };

    fetchSeries();
  }, []);

  const handleImageClick = series => {
    setSelectedSeries(series);
  };

  const handleGoBack = () => {
    setSelectedSeries(null);
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {selectedSeries ? (
            <div className={styles.modalBackdrop} onClick={handleGoBack}>
              <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <h1>{selectedSeries.title}</h1>
                {selectedSeries.images && selectedSeries.images['Poster Art'] && selectedSeries.images['Poster Art'].url ? (
                  <div className={styles.modalImageWrapper}>
                    <img
                      src={selectedSeries.images['Poster Art'].url}
                      alt={selectedSeries.title}
                      className={styles.modalImage}
                    />
                  </div>
                ) : null}
                <p>{selectedSeries.description}</p>
                <p>Release Year: {selectedSeries.releaseYear}</p>
                <button onClick={handleGoBack}>Go Back</button>
              </div>
            </div>
          ) : (
            <div className={styles.grid}>
              {series.map((item, index) => (
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
                      <div className={styles.imageOverlay} />
                    </div>
                  )}
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Series;
