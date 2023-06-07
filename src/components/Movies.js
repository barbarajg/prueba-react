import React, { useState, useEffect } from 'react';
import moviesData from '../data/sample.json';
import styles from '../styles/Movies.module.css';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = () => {
      const data = moviesData.entries.filter(item => item.programType === 'movie');

      setTimeout(() => {
        setMovies(data);
        setIsLoading(false);
      }, 1000);
    };

    fetchMovies();
  }, []);

  const handleImageClick = movie => {
    setSelectedMovie(movie);
  };

  const handleGoBack = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {selectedMovie ? (
            <div className={styles.modalBackdrop} onClick={handleGoBack}>
              <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <h1>{selectedMovie.title}</h1>
                {selectedMovie.images && selectedMovie.images['Poster Art'] && selectedMovie.images['Poster Art'].url ? (
                  <div className={styles.modalImageWrapper}>
                    <img
                      src={selectedMovie.images['Poster Art'].url}
                      alt={selectedMovie.title}
                      className={styles.modalImage}
                    />
                  </div>
                ) : null}
                <p>{selectedMovie.description}</p>
                <p>Release Year: {selectedMovie.releaseYear}</p>
                <button onClick={handleGoBack}>Go Back</button>
              </div>
            </div>
          ) : (
            <div className={styles.grid}>
              {movies.map((item, index) => (
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
          )}
        </>
      )}
    </div>
  );
};

export default Movies;
