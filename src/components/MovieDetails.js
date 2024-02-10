import React from 'react';
import { FaStar } from "react-icons/fa";


const MovieDetails = ({ title, overview, voteAverage,posterPath }) => {
  return (
      <div class="card">
      <img  src={`https://image.tmdb.org/t/p/w500${posterPath}`} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{overview}</p>
        <a href="/" class="btn btn-warning"> <FaStar className='mb-1'/> {voteAverage}</a>
      </div>
    </div>
  );
};

export default MovieDetails;
