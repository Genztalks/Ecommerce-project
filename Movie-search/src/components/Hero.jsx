import React from "react";

function Hero() {
  return (
    <section className="bg-cover bg-center h-64 flex items-center justify-center text-center"
      style={{ backgroundImage: "url('https://via.placeholder.com/1200x400')" }}>
      <div className="bg-black bg-opacity-50 p-6 rounded">
        <h2 className="text-3xl font-bold text-yellow-400">Discover Movies</h2>
        <p className="mt-2 text-gray-300">Search and explore your favorite films</p>
      </div>
    </section>
  );
}

export default Hero;
