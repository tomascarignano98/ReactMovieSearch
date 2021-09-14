import React, { useState } from 'react';

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
        {movies.reduce((arr, movie) => {
          console.log(movie);
          if (movie.poster_path) {
            arr.push(
              <article key={movie.id} className="card">
                <img
                  className="card__img"
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                  alt={movie.title + ' poster'}
                />
                <div className="card__content">
                  <h2 className="card__title">{movie.title}</h2>
                  <p className="small">
                    RELEASE DATE: {movie.release_date}
                  </p>
                  <p className="small">RATING: {movie.vote_average}</p>
                  <p className="card__desc">{movie.overview}</p>
                </div>
              </article>
            );
          }

          return arr;
        }, [])}
      </section>
    </>
  );
}
