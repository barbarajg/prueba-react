import React, { useState } from 'react';
import movieData from '../data/sample.json';
import styles from '../styles/Movies.module.css';

const Movies = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const filteredMovies = movieData.entries.filter(item => item.programType === 'movie');
  const sortedMovies = filteredMovies.sort((a, b) => a.title.localeCompare(b.title));

  const handleImageClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleModalClose = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      <h1>Movies</h1>
      <div className={styles.grid}>
        {sortedMovies.map((item, index) => (
          <div key={index} className={styles.gridItem} onClick={() => handleImageClick(item)}>
            {item.images && item.images['Poster Art'] && item.images['Poster Art'].url ? (
              <div
                className={styles.movieImage}
                style={{
                  backgroundImage: `url(${item.images['Poster Art'].url})`
                }}
              />
            ) : (
              <div className={styles.movieImagePlaceholder}>
                <span>{item.title}</span>
              </div>
            )}
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalContent}>
            <h2>{selectedMovie.title}</h2>
            {selectedMovie.images && selectedMovie.images['Poster Art'] && selectedMovie.images['Poster Art'].url && (
              <div className={styles.modalImageWrapper}>
                <img
                  src={selectedMovie.images['Poster Art'].url}
                  alt={selectedMovie.title}
                  className={styles.modalImage}
                />
              </div>
            )}
            <p>{selectedMovie.description}</p>
            <p>Release Year: {selectedMovie.releaseYear}</p>
            <button onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;
