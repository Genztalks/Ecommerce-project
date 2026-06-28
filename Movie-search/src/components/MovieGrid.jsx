import React from "react";
import MovieCard from "./MovieCard";

function MovieGrid() {
  const movies = [
    { title: "Inception", poster: "https://via.placeholder.com/200x300" },
    { title: "Interstellar", poster: "https://via.placeholder.com/200x300" },
    { title: "The Dark Knight", poster: "https://via.placeholder.com/200x300" },
  ]; 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {movies.map((movie, index) => (
        <MovieCard key={index} title={movie.title} poster={movie.poster} />
      ))}
    </div>
  );
}

export default MovieGrid;
