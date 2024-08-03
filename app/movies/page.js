'use client';

import { useState, useEffect } from 'react';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch('/api/movies');
        if (!res.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await res.json();
        setMovies(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError(error.message);
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>TOP 20 MOVIES OF ALL TIME</h1>
      <p>(According to Metacritic)</p>
      {movies.map((movie) => (
        <div key={movie._id}>
          <h2>{movie.title}</h2>
          <p>{movie.plot}</p>
        </div>
      ))}
    </div>
  );
}

export default Movies;