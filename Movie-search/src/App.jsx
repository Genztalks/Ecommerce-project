import { useState } from "react";
import { FiSearch, FiStar } from "react-icons/fi";


const dummyMovies = [
  {
    id: 1,
    title: "The Dark Knight",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb",
    rating: 9.0,
    genre: ["Action", "Crime", "Drama"],
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
  },
  {
    id: 2,
    title: "Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1",
    rating: 8.8,
    genre: ["Action", "Adventure", "Sci-Fi"],
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
  },
  {
    id: 3,
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
    rating: 8.6,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
  }
];

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMovies = dummyMovies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || movie.genre.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", "Action", "Adventure", "Drama", "Sci-Fi", "Crime"];

  const MovieCard = ({ movie }) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
      <img 
        src={movie.image} 
        alt={movie.title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.src = "https://images.unsplash.com/photo-1485846234645-a62644f84728";
        }}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{movie.title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{movie.description}</p>
        <button
          onClick={() => setSelectedMovie(movie)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Watch Now
        </button>
      </div>
    </div>
  );

  const MovieDetail = ({ movie }) => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-64 object-cover"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1485846234645-a62644f84728";
            }}
          />
          <button
            onClick={() => setSelectedMovie(null)}
            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            ×
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">{movie.title}</h2>
            <div className="flex items-center">
              <FiStar className="text-yellow-400 mr-1" />
              <span className="text-white">{movie.rating}</span>
            </div>
          </div>
          <p className="text-gray-300 mb-4">{movie.description}</p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white mb-2">Genre</h3>
            <div className="flex flex-wrap gap-2">
              {movie.genre.map((g) => (
                <span key={g} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {g}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white mb-2">Cast</h3>
            <div className="flex flex-wrap gap-2">
              {movie.cast.map((actor) => (
                <span key={actor} className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                  {actor}
                </span>
              ))}
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-2xl font-bold text-white mb-4 md:mb-0">MovieFlix</h1>
          <div className="flex space-x-6">
            {["Home", "Categories", "About Us", "Contact"].map((item) => (
              <button key={item} className="text-gray-300 hover:text-white transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>

      {selectedMovie && <MovieDetail movie={selectedMovie} />}
    </div>
  );
};

export default App;