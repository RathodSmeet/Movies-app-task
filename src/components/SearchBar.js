import React, { useState } from 'react';
import axios from 'axios';
import MovieList from './MovieList';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, {
        headers: {
          accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2U4MzdjYTQ5NTkxNmU5ZGRjODQ0NmE4ODNmOTBmOCIsInN1YiI6IjY1YzcyNzI2YTMxNDQwMDE4NjhkODcyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uJXPMWKNpOwt84Oz9cVOVrAE7ARHl8THUC1qf-smCj8`
        }
      });
      console.log(response.data);
      setMovies(response.data.results)
      setLoading(true)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false)
    
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={handleChange}
        className="search-input"
      />
      <button type="submit" className="search-button" disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
    </form>
    <div>
    <h1>Movies</h1>
    <MovieList movies={movies} />
  </div>
  </>
  );
};


export default SearchBar;
