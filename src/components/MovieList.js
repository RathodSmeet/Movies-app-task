import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <div>
      <h2>Search Results:</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
