import React, { useState } from 'react';
import MovieCard from './MovieCard';

export default function SearchMovies() {
  const [query, setQuery] = useState('');

  const [movies, setMovies] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const API_KEY = 'abcd';

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      );

      const data = await response.json();

      setMovies(data.results);
      setQuery('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">Movie Name</label>
        <input
          type="text"
          name="query"
          value={query}
          placeholder="i.e. Jurassic Park"
          className="input"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <section className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </section>
    </>
  );
}
