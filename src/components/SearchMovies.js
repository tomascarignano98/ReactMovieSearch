import React from 'react';

export default function SearchMovies() {
  return (
    <form className="form">
      <label className="label">Movie Name</label>
      <input
        type="text"
        name="query"
        placeholder="i.e. Jurassic Park"
        className="input"
      />
      <button type="submit" className="button">
        Search
      </button>
    </form>
  );
}
