import React from "react";

function MovieCard({ title, poster }) {
  return (
    <div className="bg-gray-800 rounded shadow-lg overflow-hidden">
      <img src={poster} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
