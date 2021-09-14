import React from 'react';

export default function MovieCard(props) {
  const { movie } = props;

  return (
    <article className="card">
      <img
        className="card__img"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + ' poster'}
      />
      <div className="card__content">
        <h2 className="card__title">{movie.title}</h2>
        <p className="small">RELEASE DATE: {movie.release_date}</p>
        <p className="small">RATING: {movie.vote_average}</p>
        <p className="card__desc">{movie.overview}</p>
      </div>
    </article>
  );
}
