import React from 'react';
import MovieDetails from './MovieDetails';

const MovieList = ({ movies }) => {
  return (

    // <div className="card-container">
    // {movies.map((movie) => (
    //   <MovieDetails
    //     key={movie.id}
    //     title={movie.title}
    //     overview={movie.overview}
    //     voteAverage={movie.vote_average}
    //     posterPath={movie.poster_path}
    //   />
    //   ))}
    //   </div>
    
       
        <>
        <div className="row">
          {movies.map((movie) => (
             <div key={movie.id} className="col-md-4 mb-4">
            <MovieDetails
              title={movie.title}
              overview={movie.overview}
              voteAverage={movie.vote_average}
              posterPath={movie.poster_path}
            />
            </div>
          ))}
          </div>
       
       </>

  
  );
};

export default MovieList;
