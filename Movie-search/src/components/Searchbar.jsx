import React, { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query);
    // You can connect to an API like TMDB here
  };

  return (
    <div className="flex justify-center mt-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
        className="w-1/2 p-2 rounded-l bg-gray-700 text-white focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-yellow-400 text-black px-4 rounded-r font-bold"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
